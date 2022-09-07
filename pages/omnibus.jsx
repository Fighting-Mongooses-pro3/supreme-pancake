import { Layoutblock, Page, TabsContainer } from "../components";
import { MonsterBuilder } from "../components/buildtools";
import { TextEditor } from "../components/buildtools";

const omnibus = () => {
  return (
    <Page>
      <div className="w-screen bg-center bg-no-repeat bg-cover flex justify-center z-0 pr-4">
        <div className="w-11/12 z-10">
          <TabsContainer>
            <div label="👹">
              <MonsterBuilder />
            </div>
            <div label="📝">
              <TextEditor />
            </div>
            <div label="🖼">
              <Layoutblock />
            </div>
          </TabsContainer>
        </div>
      </div>
    </Page>
  );
};

export default omnibus;
