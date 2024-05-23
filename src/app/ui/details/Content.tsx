import React from "react";

export const Content = ({ data, isIa }) => {
  const { title, url, content } = data;

  return (
    <div className="w-full py-12 px-8 flex flex-col justify-center">
      {url && (
        <a
          href={url}
          target="_blank"
          className="text-sm hover:text-blue-300 mb-6"
        >
          {url}
        </a>
      )}
      <h1 className="text-3xl">{title}</h1>

      <div className="py-4">
        {isIa === 0
          ? content &&
            content.map((item) => {
              if (item.tag === "p") {
                return (
                  <>
                    <p dangerouslySetInnerHTML={{ __html: item.text }} />
                    <br />
                  </>
                );
              } else if (item.tag === "h1") {
                return (
                  <>
                    <h2
                      className="text-2xl"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                    <br />
                  </>
                );
              } else if (item.tag === "h2") {
                return (
                  <>
                    <h3
                      className="text-xl"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                    <br />
                  </>
                );
              } else if (item.tag === "h3") {
                return (
                  <>
                    <h4
                      className="text-lg"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                    {item.text}
                    <br />
                  </>
                );
              } else if (item.tag === "h4") {
                return (
                  <>
                    <h5
                      className="text-md"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                    <br />
                  </>
                );
              } else if (item.tag === "h5") {
                return (
                  <>
                    <h5
                      className="text-sm"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                    <br />
                  </>
                );
              } else if (item.tag === "h6") {
                return (
                  <>
                    <h6
                      className="text-xs"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                    <br />
                  </>
                );
              }
            })
          : content &&
            content.map((item) => {
              if (item.tag === "p") {
                return (
                  <>
                    <p>{item.text}</p>
                    <br />
                  </>
                );
              } else if (item.tag === "h1") {
                return (
                  <>
                    <h2 className="text-2xl">{item.text}</h2>
                    <br />
                  </>
                );
              } else if (item.tag === "h2") {
                return (
                  <>
                    <h3 className="text-xl">{item.text}</h3>
                    <br />
                  </>
                );
              } else if (item.tag === "h3") {
                return (
                  <>
                    <h4 className="text-lg">{item.text}</h4>
                    <br />
                  </>
                );
              } else if (item.tag === "h4") {
                return (
                  <>
                    <h5 className="text-md">{item.text}</h5>
                    <br />
                  </>
                );
              } else if (item.tag === "h5") {
                return (
                  <>
                    <h5 className="text-sm">{item.text}</h5>
                    <br />
                  </>
                );
              } else if (item.tag === "h6") {
                return (
                  <>
                    <h6 className="text-xs">{item.text}</h6>
                    <br />
                  </>
                );
              }
            })}
      </div>
    </div>
  );
};
