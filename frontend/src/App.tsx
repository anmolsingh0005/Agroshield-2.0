import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Authenticationscreens/Login";

function App() {
	return (
		

			<Routes>
				




				<Route path="/Authentication" element={<Login />}>
					<Route path="/Authentication/login" element={<Login />} />
					{/* <Route path="/settings/user" element={<UserManagement />} />
					<Route path="/settings/tag" element={<TagManagement />} />
					<Route path="/settings/role/addRole" element={<AddRolesModal />} />
					<Route path="/settings/workspace" element={<ArchiveWorkspace />} />
					<Route path="/settings/role/edit/:id" element={<EditRolesModal />} />
					<Route path="/settings/user/edit/:id" element={<EditUser />} />
					<Route path="/settings/tag/edit/:id" element={<EditTagModal />} />
					<Route path="/settings/user/addUser" element={<AddUserModal />} />
					<Route path="/settings/tag/addTag" element={<AddTag />} /> */}
				</Route>












        {/* <Route path="/load" element={<LoaderPage />} />
				<Route path="/" element={<AuthenticateUser />}>
					<Route path="/load" element={<LoaderPage />} />
					<Route path="*" element={<NotFound />} />
				</Route>
				<Route path="/fd" element={<FullDialogLayout />}>
					<Route path="workspace/list" element={<WorkspaceList />} />
				</Route> */}


        
				{/* <Route path="/space" element={<AppLayout />}>
					<Route index element={<HomePage />}></Route>
					<Route path="prioritization" element={<KanoPrioritization />} />
					<Route path="taskboard" element={<TaskBoarding />} />
					<Route path="info" element={<InformationArchitecture />} />
					<Route path="app" element={<WatingModel />} />
					<Route path="refinement" element={<WorkitemRefinement />} />
					<Route path="home" element={<HomePage />} />
					<Route path="apps" element={<ConformationModel />} />
					<Route path="idea" element={<IdeaEnhansment />} />

					<Route path="/test/:id" element={<ProductList />} />
					<Route path="describe" element={<AddWorkspace />} />
					<Route path="/featurelist/:id" element={<FeatureList />} />
					<Route path="feed" element={<FeedbackForm />} />
					<Route
						path="/featurelistSpec/:id"
						element={<FeatureSpecification />}
					/>
					<Route path="data/:id" element={<DataSchema />} />
					<Route path="uxprocess/:id" element={<UxProcess />} />
					<Route path="apiDesign/:id" element={<ApiDesign />} />
					<Route path="moduleCheck" element={<ModuleCheck />} />

					<Route path="profile" element={<ProfileLayout />}>
						<Route path="profile/profile" element={<UserProfileDetails />} />
					</Route>

					<Route path="ddd" element={<DDDLayout />}>
						<Route path="ddd/core" element={<DesignSpecCore />} />
						<Route path="ddd/strategic" element={<StrategicDesign />} />
						<Route path="ddd/advanced" element={<AdvancedPatterns />} />
					</Route>
					<Route path="planer" element={<Planerlayout />}>
						<Route path="backlogs" element={<Backlog />} />
						<Route path="releaseplan" element={<Release />} />
						<Route path="releaseplans" element={<Release />} />
						<Route path="releaseplanner" element={<ReleasePlanView />} />
						<Route path="featureplans" element={<Feature />} />
						<Route path="featureplanner" element={<FeaturePlanView />} />
						<Route path="sprintplans" element={<Sprint />} />
						<Route path="sprintplanner" element={<SprintPlanView />} />
						<Route path="mytasks" element={<MyTasks />} />
						<Route path="add" element={<TaskBoarding />} />
						<Route path="edit" element={<ExpandedModalForEdit />} />
					</Route>
				</Route> */}

				{/* <Route path="workspace/" element={<WorkspaceLayout />}>
					<Route path="fe/featurelist/:id" element={<FeatureList />} />
					<Route path="fe/featurerole/:id" element={<FeatureRoles />} />
					<Route path="fe/featurespec/:id" element={<FeatureSpecification />} />
					<Route path="de/uxprocess/:id" element={<UxProcess />} />
					<Route path="de/info/:id" element={<InformationArchitecture />} />
					<Route path="de/ddd/" element={<DDDLayout />}>
						<Route path="core/:id" element={<DesignSpecCore />} />
						<Route path="strategic/:id" element={<StrategicDesign />} />
						<Route path="advanced/:id" element={<AdvancedPatterns />} />
					</Route>
					<Route path="de/apiDesign/:id" element={<ApiDesign />} />
					<Route path="de/data/:id" element={<DataSchema />} />
				</Route> */}
				{/* <Route path="/" element={<AppLayout />}>
					<Route path="*" element={<NotFound />} />
				</Route> */}
			</Routes>
		
	);
}

export default App;
