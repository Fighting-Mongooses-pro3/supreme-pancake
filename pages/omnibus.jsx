import { Layoutblock } from "../components";
import { MonsterBuilder } from "../components/buildtools";
import { TextEditor } from "../components/buildtools";
import { Page } from "../components";

const omnibus = () => {
  return (
    <Page>
      <div className="w-screen bg-center bg-no-repeat bg-cover flex justify-center z-0 pr-4">
        <div className="w-11/12 z-10">
          <Layoutblock />
        </div>
      </div>
    </Page>
  );
};

export default omnibus;
