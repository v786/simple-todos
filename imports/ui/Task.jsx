import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

//Task componet - represents a single todo item
export default class Task extends Component {
	toggleChecked() {
		// Set the checked property to the opposite of its current value
		Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
	}

	deleteThisTask() {
		Meteor.call('tasks.remove', this.props.task._id);
	}

	render() {
		const taskClassName = this.props.task.checked ? 'checked' : '';

		return (
			<li className = {taskClassName}>
				<button className = "delete" onClick = {this.deleteThisTask.bind(this)}>
					&times;
				</button>

				<input
					type = "checkbox"
					readOnly
					checked = {this.props.task.checked}
					onClick = {this.toggleChecked.bind(this)}
				/>

				<span className = "text">
					<strong>{this.props.task.username}</strong>: {this.props.task.text}
				</span>
			</li>	
		);
	}
}

Task.propTypes = {

	//this Component gets the task to display thorugh react prop.
	//We can use propTypes.object.isRequired

	task: PropTypes.object.isRequired,
};

