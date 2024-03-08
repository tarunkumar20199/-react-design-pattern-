// --------------------------------------LAYOUT COMPONENT------------------------------

// import { CustomHookComponents } from "./components/custom-hooks";
import { FunctionalComponent } from "./components/functional-programming";
// import { HigherOrderComponent } from "./components/higher-order-component";
// import { ComponentsHandler } from "./components/uncontrol-control-components";
// import { SplitScreen } from "./components/split-screen";
// import { Modal } from "./components/Modal";
// import { LargeAuthorListItem } from "./components/authors/LargeListItem";
// import { SmallAuthorListItem } from "./components/authors/SmallListItems";
// import { LargeBookListItem } from "./components/books/LargeListItem";
// import { SmallBookListItem } from "./components/books/SmallListItem";
// import { NormalList } from "./components/lists/Normal";
// import { NumberedList } from "./components/lists/Numbered";
// import { authors } from "./data/authors";
// import { books } from "./data/books";
// const LeftSideComp = ({ title }) => {
//   return <h1 style={{ backgroundColor: "red" }}>{title}</h1>;
// };
// const RightSideComp = ({ title }) => {
//   return <h1 style={{ backgroundColor: "blue" }}>{title}</h1>;
// };

//--------------------------------------CONTAINER COMPONENT------------------------------

// import { UserLoader } from "./components/user-loader";
// import { CurrentUserLoader } from "./components/current-user-loader";
// import { ResourceLoader } from "./components/resource-loader";
// import { BookInfo } from "./components/book-info";
// import { DataLoader } from "./components/data-source";
// import axios from "axios";
// import { UserInfo } from "./components/user-Info";
// import { DataSourceWithRender } from "./components/data-source-with-render";

// const getDataFromServer = async (url) => {
//   const response = await axios.get(url);
//   return response.data;
// };
function App() {
  // --------------------------------------LAYOUT COMPONENT------------------------------
  // return (
  //   // <SplitScreen leftWidth={1} rightWidth={3}>
  //   //   <LeftSideComp title={"Right"} />
  //   //   <RightSideComp title={"Left"} />
  //   // </SplitScreen>
  //   <>
  //     {/* <NormalList
  //       items={authors}
  //       sourceName={"author"}
  //       ItemComponent={SmallAuthorListItem}
  //     />
  //     <NumberedList
  //       items={authors}
  //       sourceName={"author"}
  //       ItemComponent={LargeAuthorListItem}
  //     />
  //     <NormalList
  //       items={books}
  //       sourceName={"book"}
  //       ItemComponent={SmallBookListItem}
  //     />
  //     <NumberedList
  //       items={books}
  //       sourceName={"book"}
  //       ItemComponent={LargeBookListItem}
  //     /> */}
  //     {/* <Modal>
  //       <LargeBookListItem book={books[0]} />
  //     </Modal> */}

  //   </>
  // );

  //--------------------------------------CONTAINER COMPONENT------------------------------
  // return (
  //   <>
  //     {/* <CurrentUserLoader userId={"3"}>
  //       <UserInfo />
  //       <UserLoader />
  //     </CurrentUserLoader> */}
  //     {/* <UserLoader userId={"3"}>
  //       <UserInfo />
  //     </UserLoader> */}
  //     {/* <ResourceLoader resourceUrl={"/users/2"} resourceName={"user"}>
  //       <UserInfo />
  //     </ResourceLoader>
  //     <ResourceLoader resourceUrl={"/books/2"} resourceName={"book"}>
  //       <BookInfo />
  //     </ResourceLoader> */}
  //     {/* <DataLoader
  //       getData={() => getDataFromServer("/users/2")}
  //       resourceName={"user"}
  //     >
  //       <UserInfo />
  //     </DataLoader> */}
  //     <DataSourceWithRender
  //       getData={() => getDataFromServer("/users/2")}
  //       render={(resource) => <UserInfo user={resource} />}
  //     />
  //   </>
  // );

  // --------------------------------------CONTROL/UNCONTROL COMPONENT------------------------------
  // return <ComponentsHandler />;

  // --------------------------------------CUSTOM HOOKS COMPONENT------------------------------
  // return <CustomHookComponents />;

  // --------------------------------------FUNCTIONAL COMPONENT------------------------------

  return <FunctionalComponent />;
}

export default App;
