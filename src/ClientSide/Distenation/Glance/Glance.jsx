/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { tableData } from "../../../Constants/exports";
import useGetMatcResult from "../../../hooks/useGetMatcResult";

const Glance = ({ countryName }) => {
  const data = tableData.filter(
    (item) => item.country.toLowerCase() === countryName.toLowerCase()
  );

  if (!data.length) return null;

  const renderTextWithFormat = (text) => {
    if (Array.isArray(text)) {
      return text.map((item, index) => {
        if (typeof item === "string") {
          const arrowIndex = item.search(/[►➤]/);

          return (
            <div key={index}>
              {item.split("\n").map((line, i) => (
                <div key={i}>
                  {arrowIndex > -1 && i === 0 && (
                    <span style={{ color: "red" }}>
                      {line.charAt(arrowIndex)}
                    </span>
                  )}
                  <span>{line.slice(i === 0 ? arrowIndex + 1 : 0)}</span>
                </div>
              ))}
            </div>
          );
        }
        console.error("Invalid item type:", item);
        return null;
      });
    } else if (typeof text === "string") {
      return text
        .split("\n")
        .map((line, index) => <div key={index}>{line}</div>);
    }
    console.error("Unsupported type for rendering:", text);
    return null;
  };

  return (
    <div className=" ">
      <h1
        className="font-bold lg:text-[48px] lg:leading-[57px]
                font-helvetica text-[30px] leading-[36px] text-[#1E1E1E] mb-[30px] mt-[60px] text-center"
      >
        <span className="text-[#F6941E] ">{countryName}</span> At a Glance
      </h1>
      <div
        className="overflow-x-auto   bg-[#FFF8E5]       xs:py-[60px]
md:py-[80px]
lg:py-[80px]
xl:py-[150px]
2xl:py-[150px]
md:px-[32px]
lg:px-[60px]
xl:px-[150px]
2xl:px-[150px]"
      >
        <table className="min-w-full  table-auto border-collapse">
          <thead className="border-b">
            <tr>
              <th className="px-4 py-2 text-left text-red-500">Factors</th>
              <th className="px-4 py-2 text-left text-red-500">
                {countryName}
              </th>
            </tr>
          </thead>
          <tbody>
            {data[0]?.details?.map((row, index) => (
              <tr key={index} className="">
                <td className="border-b text-[20px] text-[#272727] px-4 py-2 font-medium">
                  {row.factor}
                </td>
                <td className="border-b text-[#464646] text-[16px] px-4 py-2 whitespace-normal break-words">
                  {renderTextWithFormat(row.country)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Glance;
