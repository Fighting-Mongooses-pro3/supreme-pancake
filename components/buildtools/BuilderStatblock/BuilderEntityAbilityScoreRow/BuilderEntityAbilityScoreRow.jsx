import React from "react";
import { BuilderTextField } from "../../BuilderComponents/BuilderTextField/BuilderTextField";
import { BuilderDerivedValueTextField } from "./BuilderDerivedValueTextField";

export const BuilderEntityAbilityScoreRow = (props) => {
  const {
    strength,
    strength_save,
    dexterity,
    dexterity_save,
    constitution,
    constitution_save,
    intelligence,
    intelligence_save,
    wisdom,
    wisdom_save,
    charisma,
    charisma_save,
  } = props;

  return (
    <div className="flex flex-wrap justify-around">
      <BuilderDerivedValueTextField
        label="STR"
        text={strength}
        placeholder="0"
        containerClasses="flex flex-col items-center max-w-[55px]"
        inputClasses="w-full"
      />
      <BuilderDerivedValueTextField
        label="DEX"
        text={dexterity}
        placeholder="0"
        containerClasses="flex flex-col items-center max-w-[55px]"
        inputClasses="w-full"
      />
      <BuilderDerivedValueTextField
        label="CON"
        text={constitution}
        placeholder="0"
        containerClasses="flex flex-col items-center max-w-[55px]"
        inputClasses="w-full"
      />
      <BuilderDerivedValueTextField
        label="INT"
        text={intelligence}
        placeholder="0"
        containerClasses="flex flex-col items-center max-w-[55px]"
        inputClasses="w-full"
      />
      <BuilderDerivedValueTextField
        label="WIS"
        text={wisdom}
        placeholder="0"
        containerClasses="flex flex-col items-center max-w-[55px]"
        inputClasses="w-full"
      />
      <BuilderDerivedValueTextField
        label="CHA"
        text={charisma}
        placeholder="0"
        containerClasses="flex flex-col items-center max-w-[55px]"
        inputClasses="w-full"
      />
    </div>

    // <article className="">
    //   <table className="">
    //     <thead>
    //       <tr className="">
    //         <th className="text-black">STR</th>
    //         <th className="text-black">DEX</th>
    //         <th className="text-black">CON</th>
    //         <th className="text-black">INT</th>
    //         <th className="text-black">WIS</th>
    //         <th className="text-black">CHA</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr className="">
    //         <td
    //           className="text-black text-lg border-r-8 border-transparent cursor-cell pl-4"
    //           contentEditable
    //         >
    //           {props.strength}({"+" + Math.ceil((props.strength - 1) / 2 + -5)})
    //         </td>
    //         <td
    //           className="text-black text-lg border-r-8 border-transparent cursor-cell pl-4"
    //           contentEditable
    //         >
    //           {props.dex}({Math.ceil((props.dex - 1) / 2 + -5)} )
    //           {props.dexterity_save ? strength_save : "+0"}
    //         </td>
    //         <td
    //           className="text-black text-lg border-r-8 border-transparent cursor-cell pl-4"
    //           contentEditable
    //         >
    //           {props.con}({Math.ceil((props.con - 1) / 2 + -5)} )
    //           {props.constitution_save ? strength_save : "+0"}
    //         </td>
    //         <td
    //           className="text-black text-lg border-r-8 border-transparent cursor-cell pl-4"
    //           contentEditable
    //         >
    //           {props.int}({Math.ceil((props.int - 1) / 2 + -5)} )
    //           {props.intelligence_save ? strength_save : "+0"}
    //         </td>
    //         <td
    //           className="text-black text-lg border-r-8 border-transparent cursor-cell pl-4"
    //           contentEditable
    //         >
    //           {props.wis}({Math.ceil((props.wis - 1) / 2 + -5)} )
    //           {props.wisdom_save ? strength_save : "+0"}
    //         </td>
    //         <td
    //           className="text-black text-lg border-r-8 border-transparent cursor-cell pl-4"
    //           contentEditable
    //         >
    //           {props.cha}({Math.ceil((props.cha - 1) / 2 + -5)} )
    //           {props.charisma_save ? strength_save : "+0"}
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </article>
  );
};
