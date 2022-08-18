import storage from './util/storage.js';

// need to update
// save item after editing when loosing focus?

const initialState = {
	todoList: storage.get(),
	filter: 'all',
	filters: {
		all() {
			return true;
		},
		active(todo) {
			return !todo.isCompleted;
		},
		completed(todo) {
			return todo.isCompleted;
		},
	},
};

const actions = {
	add({ todoList }, name) {
		if (name) {
			todoList.push({
				name,
				isCompleted: false,
				isEditing: false,
			});
			storage.set(todoList);
		}
	},
	removeOne({ todoList }, index) {
		todoList.splice(index, 1);
		storage.set(todoList);
	},
	toggle({ todoList }, index) {
		todoList.forEach((todo, i) => {
			if (i == index) {
				todo.isCompleted = !todo.isCompleted;
			}
		});
		storage.set(todoList);
	},
	toggleAll({ todoList }) {
		todoList.forEach((todo) => {
			todo.isCompleted = !todo.isCompleted;
		});
		storage.set(todoList);
	},
	clearCompleted(state) {
		const todoList = state.todoList.filter(
			(item) => item.isCompleted == false
		);
		const newState = { ...state, todoList };
		storage.set(todoList);
		return newState;
	},
	showCompleted({ todoList }) {
		todoList.filter((item) => item.isCompleted == true);
		storage.set(todoList);
	},
	filterItem(state, ...method) {
		state.filter = method.join('');
	},
	toggleEditing({ todoList }, index) {
		todoList.forEach((item, i) => {
			if (i == index) item.isEditing = !item.isEditing;
		});
	},
	edit({ todoList }, name, index) {
		if (name !== '') {
			todoList.forEach((item, i) => {
				if (i == index) item.name = name;
			});
			this.toggleEditing({ todoList }, [index]);
			storage.set(todoList);
			//delete todo when there is no value
		} else {
			this.removeOne({ todoList }, [index]);
		}
	},
};

export default function reducer(state = initialState, action, args = []) {
	const newState = actions[action] && actions[action](state, ...args);
	if (newState) return newState;
	return state;
}
