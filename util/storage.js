const STORAGE_KEY = 'TODOS';

export default {
	set(todos) {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
	},
	get() {
		return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
	},
};
