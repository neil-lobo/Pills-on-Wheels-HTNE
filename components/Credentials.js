import React from "react";
import {
	View,
	TextInput,
	StyleSheet,
	Image,
	Text,
	TouchableOpacity,
} from "react-native";

class IntroScreen extends React.Component {
	state = {
		firstName: "",
		lastName: "",
		address: "",
		email: "",
		mobileNum: "",
	};
	render() {
		console.log(this.state);

		return (
			<View style={styles.container}>
				<Image
					source={require("../assets/logo.png")}
					style={{ borderWidth: 1 }}
				/>
				<Text style={styles.text}>
					ENTER YOUR INFORMATION TO GET STARTED!
				</Text>
				<View style={styles.inputContainer}>
					<TextInput
						placeholder="First Name"
						onChangeText={(text) =>
							this.setState({ firstName: text })
						}
						style={styles.input}
					/>
					<TextInput
						placeholder="Last Name"
						onChangeText={(text) =>
							this.setState({ lastName: text })
						}
						style={styles.input}
					/>
					<TextInput
						placeholder="Address"
						onChangeText={(text) =>
							this.setState({ address: text })
						}
						style={styles.input}
					/>
					<TextInput
						placeholder="Email Address"
						onChangeText={(text) => this.setState({ email: text })}
						style={styles.input}
					/>
					<TextInput
						placeholder="Mobile Number"
						onChangeText={(text) =>
							this.setState({ mobileNum: text })
						}
						style={styles.input}
					/>
				</View>
				<View style={styles.messageContainer}>
					<Text style={styles.message}>
						THIS INFORMATION HELPS US IN VERIFICATION AS WELL AS
						ALLOWING DRIVERS TO DELIVER STRAIGHT TO YOUR HOME
					</Text>
				</View>
				<TouchableOpacity style={styles.button}>
					<Text
						style={{
							color: "white",
							fontSize: 17,
							fontWeight: "bold",
						}}
					>
						VERIFY MY ID
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default IntroScreen;

const styles = StyleSheet.create({
	button: {
		borderWidth: 1,
		backgroundColor: "red",
		borderRadius: 6,
		height: 40,
		width: "80%",
		justifyContent: "center",
		alignItems: "center",
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		margin: 20,
	},
	input: {
		borderWidth: 1,
		borderRadius: 6,
		borderColor: "#D1D1D1",
		paddingHorizontal: 5,
		paddingVertical: 3,
		margin: 10,
	},
	inputContainer: {
		// borderWidth: 1,
		width: "100%",
		// flex: 1,
	},
	messageContainer: {
		width: "90%",
		marginVertical: 10,
		// borderWidth: 1,
		borderRadius: 6,
		backgroundColor: "#B3D1FF",
		padding: 5,
	},
	message: {
		color: "white",
		fontWeight: "bold",
		fontSize: 17,
	},
	text: {
		// borderWidth: 1,
		fontSize: 17,
		fontWeight: "bold",
		marginBottom: 10,
	},
});
