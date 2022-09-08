import { GiMonsterGrasp } from "react-icons/gi";
import {
  EncounterBalancer,
  Layoutblock,
  Page,
  TabsContainer,
  MonsterBuilder,
  TextEditor,
} from "../components";

const omnibus = () => {
  return (
    <Page currentPage="Home">
      <div className="w-screen bg-center bg-no-repeat bg-cover flex justify-center">
        <div className="w-11/12 z-10">
          <TabsContainer defaultTab="👹" className="pt-2">
            <div label="👹" longName="Monster Builder">
              <MonsterBuilder />
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
