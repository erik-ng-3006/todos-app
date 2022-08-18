import html from '../core.js';
import TodoList from './TodoList.js';

export default function Main() {
	return html`<section class="main">
		<input id="toggle-all" class="toggle-all" type="checkbox" />
		<label onclick="dispatch('toggleAll')" for="toggle-all"
			>Mark all as complete</label
		>
		${TodoList()}
	</section>`;
}
