"use strict";
const React = require("react");
const { Text, Box, Spacer, Newline } = require("ink");
const SelectInput = require("ink-select-input");

const App = ({ name = "User" }) => {
	// const handleSelect = () => {};

	// const options = [
	// 	{
	// 		label: "Cadastrar novo cliente",
	// 		value: "create-account",
	// 	},
	// 	{
	// 		label: "Checar saldo",
	// 		value: "get-balance",
	// 	},
	// ];

	return (
		<Box flexDirection="column" alignItems="center" justifyContent="center">
			<Box borderStyle="round" padding={1}>
				<Text bold>Welcome to F4Bank's CLI</Text>
			</Box>
			<Newline />
			<Box>
				<Text>
					Hello, <Text color="green">{name}</Text>
				</Text>
			</Box>
			<Newline />
			<Box>
				<Text>Please, select an option:</Text>
				{/* <Newline />
				<SelectInput items={options} onSelect={handleSelect} /> */}
			</Box>
		</Box>
	);
};

module.exports = App;
