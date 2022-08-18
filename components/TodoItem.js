import html from '../core.js';

export default function TodoItem({ index, name, isCompleted, isEditing }) {
	return html`
		<li class="${isCompleted ? 'completed' : ''} ${isEditing && 'editing'}">
			<div class="view">
				<input
					onchange="dispatch('toggle', [${index}])"
					class="toggle"
					type="checkbox"
					${isCompleted ? 'checked' : ''}
				/>
				<label ondblclick="dispatch('toggleEditing', [${index}])"
					>${name}</label
				>
				<button
					class="destroy"
					onclick="dispatch('removeOne', [${index}])"
				></button>
			</div>
			<input
				class="edit"
				value="${name}"
				onkeyup="(event.key === 'Enter'
			&& dispatch('edit', [event.target.value, ${index}])) || (event.key ===
			'Escape' && dispatch('toggleEditing', [${index}]))"
			/>
		</li>
	`;
}
