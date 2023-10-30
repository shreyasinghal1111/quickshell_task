import React from "react";
import { useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import {MdSignalCellularAlt , MdSignalCellularAlt2Bar , MdSignalCellularAlt1Bar} from "react-icons/md"
import {IoAlert} from "react-icons/io5";
import {BsThreeDots} from "react-icons/bs";
import "./Page.css";
import Card from "../Cmp/Cmp";

const DashView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => {
          return (
            <>
              <div key={index} className="dashCardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="leftView">
                    {!user && index === 0 ? (
                      <BsThreeDots />
                    ) : (
                      <>
                       
                      </>
                    )}
                    {!user && index === 1? (
                      <MdSignalCellularAlt1Bar />
                    ) : (
                      <>
                       
                      </>
                    )}
                    {!user && index === 2? (
                      <MdSignalCellularAlt2Bar />
                    ) : (
                      <>
                        {/* <div
                          className="imageContainer relative"
                          style={{ width: "15px", height: "15px", display : 'inline-block' }}
                        > */}
                          {/* <img
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                            }}
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                            alt="UserImage"
                          /> */}
                        {/* </div> */}
                      </>
                    )}

                    {!user && index === 3? (
                      <MdSignalCellularAlt />
                    ) : (
                     <>
                      </>
                    )}

                    {!user && index === 4? (
                      <IoAlert />
                    ) : (
                      <>
                       
                      </>
                    )}
                   {user ? (
                    <div
                    className="imageContainer relative"
                    style={{ width: "15px", height: "15px", display : 'inline-block' }}>
                      <img
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                            }}
                            src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                            alt="UserImage"
                          />
                      </div>
                   ): (
                    <>
                    </>
                   )}

                    <span>
                      {" "}
                      {elem[index]?.title} {elem[index]?.value?.length}
                    </span>
                  </div>
                  <div className="rightView">
                    <AiOutlinePlus />{" "}
                    <span style={{ letterSpacing: "2px" }}>...</span>
                  </div>
                </div>
                <div className="dashList flex-gap-10">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card id={elem.id} title={elem.title} tag={elem.tag} />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default DashView;
