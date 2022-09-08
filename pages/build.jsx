import {
  EncounterBalancer,
  Layoutblock,
  Page,
  TabsContainer,
} from "../components";
import { MonsterBuilder } from "../components/buildtools";
import { TextEditor } from "../components/buildtools";

const omnibus = () => {
  return (
    <Page currentPage="Tools Page">
      <div className="w-screen bg-center bg-no-repeat bg-cover flex justify-center z-0 pr-4">
        <div className="w-11/12 z-10">
          <TabsContainer defaultTab="👹" className="pt-2">
            <div label="👹" longName="Monster Builder">
              <MonsterBuilder monsterUrl="https://api.open5e.com/monsters/?document__slug=wotc-srd&format=json" />
            </div>
            <div label="📝" longName="Text Editor">
              <TextEditor />
            </div>
            <div label="⚔" longName="Encounter Balancer">
              <EncounterBalancer />
            </div>
            <div label="🖼" longName="Layout Editor">
              <Layoutblock />
            </div>
          </TabsContainer>
        </div>
      </div>
    </Page>
  );
};

export default omnibus;
