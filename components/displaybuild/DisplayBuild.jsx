import React from "react";
import { BuildContext } from "../buildcontext/BuildContext";

export const DisplayBuild = () => {
  //   const [build, setBuild] = useContext(BuildContext);

  //   useEffect(() => {}, [build]);
  return (
    <BuildContext.Consumer>
      {([campaign, setCampaign]) => (
        <div className="bg-cyan-500">
          {console.log(campaign)}
          <p>Display Campaign</p>
          <div>
            <p>Keys</p>
            {Object.keys(campaign).map((k, i) => (
              <p key={i}>{k}</p>
            ))}
          </div>

          {campaign.monsters ? (
            campaign.monsters.map((e, i) => {
              <p key={i}>{e.toString()}</p>;
            })
          ) : (
            <p>No monsters</p>
          )}
        </div>
      )}
    </BuildContext.Consumer>
  );
};
