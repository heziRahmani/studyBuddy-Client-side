import React from "react";
import CodeBlock from "../../../generalComponents/codeBlock/CodeBlock";
import { query } from "firebase/firestore";
import { promiseRef } from "../../../utilities/fireBase_connection/FireBaseConnection";
import { useCollection } from "../../../utilities/hooks/useCollection";
// import "./promise.scss";
export default function Promise() {
  //gets the data from fireBase
  const q = query(promiseRef);
  let { data } = useCollection(q);

  //organize the data befur rendering
  const renderData = data
    .sort((a, b) => a.sectionNum - b.sectionNum)
    .map((section) => {
      console.log(section);
      return (
        <div
          key={section.id}
          className={`promise_${String(section.section)} section`}>
          {section?.header && <h4>{section.header}</h4>}

          {section?.content.map((textItem, i) => (
            <div key={i} className='promiseContentList contentListDiv'>
              <ul>
                <i>
                  <p>{textItem}</p>
                </i>
              </ul>
            </div>
          ))}
          {section?.content_list_header && (
            <div>
              <h4>{section?.content_list_header}</h4>
            </div>
          )}
          {section?.content_list &&
            section.content_list.map((textItem, i) => (
              <div key={i} className='promiseContentList contentListDiv'>
                <ul>
                  <i>
                    <p>{textItem}</p>
                  </i>
                </ul>
              </div>
            ))}

          {section?.code && (
            <div className='codeBlock_container'>
              <CodeBlock code={section.code} leng={"javascript"} />
            </div>
          )}
        </div>
      );
    });

  return (
    <section className='promise_container'>
      <div className='promise_header'>
        <h2>
          Promi<span>se</span>
        </h2>
      </div>
      <div className='promise_body'>{renderData}</div>
    </section>
  );
}
