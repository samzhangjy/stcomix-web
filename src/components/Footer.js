import { Link } from "react-router-dom";
import "../theme-change.min.js";

function setTheme(theme) {
  document.getElementsByTagName("html")[0].setAttribute("data-theme", theme)
}

export default function Footer() {
  return (
    <div className="bg-base-200" style={{ height: "150%", padding: "50px" }}>
      <h1 className="text-2xl">
        STComix
        <span className="text-sm px-5">—— 只为创作更加有趣的漫画而生。</span>
        <span className="text-sm px-5">
          <div class="dropdown">
            <div tabindex="0" class="m-1 btn btn-xs btn-accent">
              选择主题
            </div>
            <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a>
                  <button onClick={() => setTheme("light")}>浅色模式</button>
                </a>
              </li>
              <li>
                <a>
                  <button onClick={() => setTheme("dark")}>深色模式</button>
                </a>
              </li>
              <li>
                <a>
                  <button onClick={() => setTheme("bumblebee")}>浅色模式-2</button>
                </a>
              </li>
              <li>
                <a>
                  <button onClick={() => setTheme("halloween")}>深色模式-2</button>
                </a>
              </li>
            </ul>
          </div>
        </span>
      </h1>
      <br />
      <div class="grid-3_xs-1_sm-1_md-2">
        <div class="col">
          <h2>实用链接</h2>
          <Link to="/" class="link link-primary">
            首页
          </Link>
          <br />
          <Link to="/comic" class="link link-primary">
            漫画
          </Link>
          <br />
          <Link to="/blog" class="link link-primary">
            博客
          </Link>
          <br />
        </div>
        <div class="col">
          <h2>联系方式</h2>
          Sam：
          <a
            href="https://samzhangjy.github.io"
            rel="noreferrer"
            target="_blank"
            class="link link-primary"
          >
            个人博客
          </a>
          <br />
          Alice：暂无
          <br />
          Tom：暂无
          <br />
        </div>
        <div class="col">
          <p>&copy; Copyright 2018 - 2021 STComix. 保留所有权利.</p>
        </div>
      </div>
    </div>
  );
}
