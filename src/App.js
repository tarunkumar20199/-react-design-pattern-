// import { SplitScreen } from "./components/split-screen";

import { Modal } from "./components/Modal";
// import { LargeAuthorListItem } from "./components/authors/LargeListItem";
// import { SmallAuthorListItem } from "./components/authors/SmallListItems";
import { LargeBookListItem } from "./components/books/LargeListItem";
// import { SmallBookListItem } from "./components/books/SmallListItem";
// import { NormalList } from "./components/lists/Normal";
// import { NumberedList } from "./components/lists/Numbered";
// import { authors } from "./data/authors";
import { books } from "./data/books";
// const LeftSideComp = ({ title }) => {
//   return <h1 style={{ backgroundColor: "red" }}>{title}</h1>;
// };
// const RightSideComp = ({ title }) => {
//   return <h1 style={{ backgroundColor: "blue" }}>{title}</h1>;
// };

function App() {
  return (
    // <SplitScreen leftWidth={1} rightWidth={3}>
    //   <LeftSideComp title={"Right"} />
    //   <RightSideComp title={"Left"} />
    // </SplitScreen>
    <>
      {/* <NormalList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItem}
      />
      <NumberedList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItem}
      />
      <NormalList
        items={books}
        sourceName={"book"}
        ItemComponent={SmallBookListItem}
      />
      <NumberedList
        items={books}
        sourceName={"book"}
        ItemComponent={LargeBookListItem}
      /> */}
      <Modal>
        <LargeBookListItem book={books[0]} />
      </Modal>
    </>
  );
}

export default App;
