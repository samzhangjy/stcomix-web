import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="bg-base-100">
      <div
        className="hero min-h-screen"
        style={{ "background-image": 'url("/assets/cro-bg-1.jpg")' }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              我们是STComix团队 —— 只为创作更加有趣的漫画而生。
            </p>
            <Link to="/comic" className="btn btn-lg btn-primary">看看漫画</Link>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <div className="divider">团队介绍</div> 
      <div className="hero min-h-screen">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img
            src="/assets/sam.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Sam"
          />
          <div>
            <h1 className="mb-5 text-5xl font-bold">Sam</h1>
            <p className="mb-5">
              STComix创始人，漫画起稿人，总编辑。他从2018年开始创办STComix漫画，并陆续推出了《Sam's Comics》《Tom the Bad Guy》《Making Little Human in Tom's Way》等STComix早期漫画。而后他又推出了新版漫画《Go To The Sea》《Go To The Zoo》《Go To The North Pole》等漫画，并在网站上发布。
            </p>
            <a className="btn btn-primary" href="https://samzhangjy.github.io" rel="noreferrer" target="_blank">个人博客</a>
            <a className="btn btn-primary" style={{ "marginLeft": "10px" }} href="mailto:samzhang951@outlook.com">电子邮箱</a>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div>
            <h1 className="mb-5 text-5xl font-bold">Alice</h1>
            <p className="mb-5">
              STComix画家。她从2019年加入了STComix团队，担任首席画家的职务。有了这个“灵魂画家”，STComix的漫画便又增添了几分趣味。她参与制作的《Go To The North Pole》受到了广大读者的一致肯定。
            </p>
            <button className="btn btn-disabled">暂无公开联系方式</button>
          </div>
          <img
            src="/assets/alice.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Alice"
          />
        </div>
      </div>
      <div className="hero min-h-screen">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img
            src="/assets/tom.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Tom"
          />
          <div>
            <h1 className="mb-5 text-5xl font-bold">Tom</h1>
            <p className="mb-5">
              STComix联合创始人兼股东，自STComix发展早期加入了STComix团队，并担任临时画家兼副主编一职。他和Sam共同创作的众多早期漫画受到了一致的高度评价。
            </p>
            <button className="btn btn-disabled">暂无公开联系方式</button>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div>
            <h1 className="mb-5 text-5xl font-bold">Sun</h1>
            <p className="mb-5">
              又称“阿布狗”，STComix编剧。他从2020年加入STComix，为我们的漫画事业增添了许多乐趣。当然，他所指导Sam撰写的《地球星团》也受到了广大读者的一致好评。
            </p>
            <button className="btn btn-disabled">暂无公开联系方式</button>
          </div>
          <img
            src="/assets/sun.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Sun"
          />
        </div>
      </div>
    </div>
  );
}
