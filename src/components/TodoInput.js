import React, { Component } from 'react';

export default class TodoInput extends Component {
	render() {
		const { item, handleChange, handleSubmit, editItem } = this.props;
		return (
			<div className="card card-body my-3">
				<form onSubmit={handleSubmit}>
					<div className="input-group mb-2">
						<div className="input-group-prepend">
							<div className="input-group-text bg-primary text-white">
								<i className="fas fa-book" />
							</div>
						</div>
						<input
							type="text"
							className="form-control text-capitalize"
							placeholder="add Todo"
							value={item}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<button
							disabled={item ? false : true}
							type="submit"
							className={editItem ? 'btn btn-success btn-block' : 'btn btn-primary btn-block'}
						>
							{editItem ? 'Update Item' : 'Add Item'}
						</button>
					</div>
				</form>
			</div>
		);
	}
}
