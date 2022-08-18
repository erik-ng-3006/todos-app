import html from '../core.js';
import TodoItem from './TodoItem.js';
import { connect } from '../store.js';

export default connect()(function TodoList({ todoList, filters, filter }) {
	return html`<ul class="todo-list">
		${todoList
			.filter(filters[filter])
			.map(({ name, isCompleted, isEditing }, index) => {
				return TodoItem({
					index,
					name,
					isCompleted,
					isEditing,
				});
			})}
	</ul>`;
});
