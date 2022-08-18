import html from '../core.js';
import { connect } from '../store.js';

export default connect()(function Footer({ todoList, filters, filter }) {
	const isCompletedItemLeft =
		todoList.filter((item) => item.isCompleted == true).length == 0;

	return html` <footer class="footer">
		<span class="todo-count"
			><strong
				>${todoList.filter((item) => item.isCompleted == false)
					.length}</strong
			>
			item left</span
		>
		<ul class="filters">
			${Object.keys(filters).map((method) => {
				return html`<li>
					<a
						class=${method == filter && 'selected'}
						href="#/"
						onclick="dispatch('filterItem', '${method}')"
						>${method[0].toUpperCase() + method.slice(1)}</a
					>
				</li>`;
			})}
		</ul>

		<button class="clear-completed" onclick="dispatch('clearCompleted')">
			${isCompletedItemLeft ? '' : 'Clear completed'}
		</button>
	</footer>`;
});

{
	/* <li>
				<a class="selected" href="#/" onclick="dispatch('showAll')"
					>All</a
				>
			</li>
			<li>
				<a href="#/active" onclick="dispatch('showActive')">Active</a>
			</li>
			<li>
				<a href="#/completed" onclick="dispatch('showCompleted')"
					>Completed</a
				>
			</li> */
}
