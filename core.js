//view engine to render html elements
export default function html([first, ...strings], ...values) {
	return (
		values
			.reduce(
				(acc, cur) => {
					return acc.concat(cur, strings.shift());
				},
				[first]
			)
			//filter falsy value, boolean value and allow to render number 0
			.filter((x) => (x && x !== true) || x === 0)
			.join('')
	);
}

export const createStore = function (reducer) {
	//get previous state
	let state = reducer();

	const roots = new Map();

	//render view
	function render() {
		for (let [root, component] of roots) {
			const output = component();
			root.innerHTML = output;
		}
	}

	return {
		//attach view to the root div
		attach(component, root) {
			roots.set(root, component);
			render();
		},
		//connect store with view
		connect(selector = (state) => state) {
			return (component) =>
				(props, ...args) =>
					component(
						Object.assign({}, props, selector(state), ...args)
					);
		},
		//send action to trigger state
		dispatch(action, args) {
			state = reducer(state, action, args);
			render();
		},
	};
};
