import Header from "../components/Header"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Comics() {
  const data = require("../data/comics.json")
  const [obj, setObj] = useState(function create() {
    const comics = []
    var prevI = 0;
    for (var i = 5; i < data.length; i += 6) {
      comics.push(data.slice(prevI, i + 1))
      prevI = i + 1
    }
    return comics
  });

  const query = useQuery()
  const curPage = Number(query.get("page") ? query.get("page") : 0)
  return (
    <div className="container p-10" style={{ padding: "50px" }}>
      <br />
      <br />
      <Header title="漫画" desc={`共${data.length}册`} />
      <div className="grid-3_xs-1_sm-1_md-2_lg-3">
        {obj[curPage].map((value, index) => {
          return (
            <div
              className="col p-5 m-5 grid-cols-3"
              style={{ padding: "20px" }}
            >
              <div className="card shadow-xl image-full">
                <figure>
                  <img
                    src={`/assets/comics/${value.folder}/1.jpg`}
                    style={{ height: "300px" } /* 280px */}
                    alt="封面图片"
                  />
                </figure>
                <div className="justify-end card-body">
                  <h2 className="card-title">
                    {value.title}
                    <div class="badge badge-accent badge-outline mx-2">
                      {value.pages}页
                    </div>
                  </h2>
                  <p>{value.desc}</p>
                  <div className="card-actions">
                    <Link className="btn btn-primary" to={`/comic/${index + curPage * 6}`}>前去阅读</Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="btn-group justify-center">
        <Link
          className={`btn ${curPage - 1 < 0 ? "btn-disabled" : ""}`}
          to={`/comic?page=${curPage - 1}`}
        >
          上一页
        </Link>
        {
          obj.map((value, index) => {
            return (
              <Link
                className={"btn" + (Number(curPage) === index ? " btn-active" : "")}
                key={index}
                to={`/comic?page=${index}`}
              >
                {index + 1}
              </Link>
            )
          })
        }
        <Link
          className={`btn ${curPage + 1 > obj.length - 1 ? "btn-disabled" : ""}`}
          to={`/comic?page=${curPage + 1}`}
        >
          下一页
        </Link>
      </div>
    </div>
  );
}
