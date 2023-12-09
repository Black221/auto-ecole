import { Route, Routes } from "react-router-dom"
import Layout from './Layout';
import HomePage from "./home";
import TestingPage from "./testing";
import StartTest from "./testing/pages/Start";

const App = () => {

    return (<>
		<Routes >
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<HomePage />} />

				<Route path="/test" element={<TestingPage />} />

				<Route path="/test/start" element={<StartTest />} />

				<Route path="*" element={
					<div className="flex items-center justify-center mt-20 text-8xl">
						<h1>404</h1>
					</div>
				} />
			</Route>
		</Routes>
	</>)
}

export default App
