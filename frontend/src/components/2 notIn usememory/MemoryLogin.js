import React from 'react';

class MemoryLogin extends React.Component {
	state = {};

	handleChange = (e) => {
		this.setState({ name: e.target.value });
	};
	handleClick = (e) => {
		e.preventDefault();
		this.props.name(this.state.name, fale);
	};
	render() {
		return (
			<div className='wrapper'>
				<div className='login'>
					<form>
						<div className='form-group'>
							<label>Name</label>
							<input
								type='name'
								className='form-control'
								onChange={this.handleChange}
							/>
							<small className='form-text text-muted'>Space Memory</small>
						</div>
						<button onClick={this.handleClick} className='btn btn-primary'>
							submit
						</button>
					</form>
				</div>
			</div>
		);
	}
}
