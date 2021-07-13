import Header from "../components/Header"
import { useParams } from "react-router"

export default function Comic() {
  const { bookId } = useParams()
  const data = require("../data/comics.json")[bookId], pages = [];
  for (var i = 0; i < data.pages; i++) pages.push(i + 1)
  return (
    <div className="container p-10" style={{ padding: "50px" }}>
      <br />
      <br />
      <Header title={data.title} desc={`共${data.pages}页`} />
      <div className="grid-2_xs-1">
        {
          pages.map((value, index) => {
            return (
              <div className="col">
                <img className="rounded-3xl" src={`/assets/comics/${data.folder}/${value}.jpg`} alt={`第${value}页`} />
              </div>
            )
          })
        }
      </div>
      <div class="divider">THE END</div> 
    </div>
  );
}
