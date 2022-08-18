import html from '../core.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { connect } from '../store.js';

export default connect()(function App({ todoList }) {
	return html`<section class="todoapp">
			${Header()} ${todoList.length > 0 && Main()}
			${todoList.length > 0 && Footer()}
		</section>
		<footer class="info">
			<p>Double-click to edit a todo</p>
			<p>
				Template by <a href="http://sindresorhus.com">Sindre Sorhus</a>
			</p>
			<p>Created by <a href="http://todomvc.com">Erik Nguyen</a></p>
			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		</footer>`;
});
