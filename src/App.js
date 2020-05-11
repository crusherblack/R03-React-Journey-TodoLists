import React from 'react';
import { v1 as uuid } from 'uuid';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends React.Component {
	state = {
		items: [],
		id: uuid(),
		item: '',
		editItem: false
	};

	handleChange = (event) => {
		this.setState({
			item: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const newItem = {
			id: this.state.id,
			title: this.state.item
		};
		const updatedItem = [ ...this.state.items, newItem ];
		this.setState({
			items: updatedItem,
			item: '',
			id: uuid(),
			editItem: false
		});
	};

	handleEdit = (id) => {
		const filteredItem = this.state.items.filter((item) => item.id !== id);
		const selectedItem = this.state.items.find((item) => item.id === id);
		this.setState({
			items: filteredItem,
			item: selectedItem.title,
			id: id,
			editItem: true
		});
	};

	handleDelete = (id) => {
		const filteredItem = this.state.items.filter((item) => item.id !== id);
		this.setState({
			items: filteredItem
		});
	};

	clearList = () => {
		this.setState({
			items: []
		});
	};

	render() {
		const { items, item } = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-5">
						<h3 className="text-capitalize text-center">Todo Input</h3>
						<TodoInput
							item={item}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
							editItem={this.state.editItem}
						/>

						<TodoList
							key={item.id}
							items={items}
							clearList={this.clearList}
							handleDelete={this.handleDelete}
							handleEdit={this.handleEdit}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
