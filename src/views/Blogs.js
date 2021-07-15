import Header from "../components/Header";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import copy from "copy-to-clipboard";



const copyToClipboard = (text, id) => {
  const success = document.getElementById("success-" + id),
    error = document.getElementById("error-" + id);
  try {
    copy(text);
    success.style.display = "block";
    setTimeout(() => {
      success.style.display = "none";
    }, 1500)
  } catch (err) {
    error.style.display = "block";
    console.log("Error while copying to clipboard: " + err);
    setTimeout(() => {
      error.style.display = "none";
    }, 1500)
  }
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Blogs() {
  const data = require("../data/blogs.json");
  const [obj, setObj] = useState(function create() {
    const blogs = [];
    var prevI = 0;
    if (data.length < 6) blogs.push(data);
    for (var i = 5; i < data.length; i += 6) {
      blogs.push(data.slice(prevI, i + 1));
      prevI = i + 1;
    }
    return blogs;
  });

  const query = useQuery();
  const curPage = Number(query.get("page") ? query.get("page") : 0);
  return (
    <div className="container" style={{ padding: "50px" }}>
      <br />
      <br />
      <Header title="博客" desc={`共${data.length}篇`} />
      <div className="grid-3_xs-1_sm-1_md-2_lg-3">
        {obj[curPage].map((value, index) => {
          return (
            <div className="col p-5" style={{ padding: "20px" }}>
              <div class="card lg:card-side shadow-lg">
                <div class="card-body">
                  <h2 class="card-title">{value.title}</h2>
                  <p>{value.desc}</p>
                  <div class="card-actions">
                    <Link class="btn btn-primary" to={`/blog/${value.file}`}>
                      阅读全文
                    </Link>
                    <a href={`#copy-link-${value.file}`} class="btn btn-ghost">
                      获取链接
                    </a>
                    <div id={`copy-link-${value.file}`} class="modal">
                      <div class="modal-box">
                        <div
                          class="alert alert-success"
                          id={`success-${value.file}`}
                          style={{ display: "none" }}
                        >
                          <div class="flex-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="#009688"
                              class="flex-shrink-0 w-6 h-6 mx-2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                              ></path>
                            </svg>
                            <label>永久链接已复制到剪切板</label>
                          </div>
                        </div>
                        <div
                          class="alert alert-error"
                          id={`error-${value.file}`}
                          style={{ display: "none" }}
                        >
                          <div class="flex-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              class="w-6 h-6 mx-2 stroke-current"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                              ></path>
                            </svg>
                            <label>永久链接复制失败</label>
                          </div>
                        </div>
                        <div class="form-control">
                          <label class="label">
                            <span class="label-text" id="permalink-label">
                              永久链接
                            </span>
                          </label>
                          <div class="relative">
                            <input
                              type="text"
                              placeholder="Search"
                              class="w-full pr-16 input input-accent input-info input-disabled"
                              value={`https://stcomix.vercel.app/blog/${value.file}`}
                              id="permalink"
                            />
                            <button
                              class="absolute right-0 top-0 rounded-l-none btn btn-info"
                              onClick={() =>
                                copyToClipboard(
                                  `https://stcomix.vercel.app/blog/${value.file}`,
                                  value.file
                                )
                              }
                            >
                              复制
                            </button>
                          </div>
                        </div>

                        <div class="modal-action">
                          <a href="#copied" class="btn btn-primary">
                            完成
                          </a>
                          <a href="#copied" class="btn btn-ghost">
                            取消
                          </a>
                        </div>
                      </div>
                    </div>
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
        {obj.map((value, index) => {
          return (
            <Link
              className={
                "btn" + (Number(curPage) === index ? " btn-active" : "")
              }
              key={index}
              to={`/comic?page=${index}`}
            >
              {index + 1}
            </Link>
          );
        })}
        <Link
          className={`btn ${
            curPage + 1 > obj.length - 1 ? "btn-disabled" : ""
          }`}
          to={`/comic?page=${curPage + 1}`}
        >
          下一页
        </Link>
      </div>
    </div>
  );
}
