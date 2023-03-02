//CSS import
import "./Blog.css";

//Image import
import tomons from "../../Assets/images/d2.png";
import uconAcrobatics from "../../Assets/images/u6.png";
import retrospec from "../../Assets/images/u10.png";
import fellow from "../../Assets/images/u9.png";
import candylabToys from "../../Assets/images/h17.png";
import taschen from "../../Assets/images/c3.png";

const Blog = () => {
  return (
    <section id="blog">
      <div>
        <p>2023</p>
      </div>
      <article>
        <h2>
          Blog: new article (Tomons) <span> 20.02.2023 - 14:44</span>
        </h2>
        <div>
          <img src={tomons} alt="Tomons" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, dolore? Inventore totam
            facilis explicabo dolore alias neque aperiam nemo, laboriosam consequatur magnam!
            Laudantium eligendi optio, quaerat saepe excepturi esse, odit molestiae reprehenderit
            similique corporis fugiat neque ad sed pariatur, voluptatem eos consequatur doloremque
            aliquid nesciunt fuga possimus. Quaerat, neque iure!
          </p>
        </div>
      </article>

      <article>
        <h2>
          Blog: new article (Ucon Acrobatics) <span> 12.01.2023 - 12:01</span>
        </h2>
        <div>
          <img src={uconAcrobatics} alt="uconAcrobatics" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo placeat ex corporis
            commodi aspernatur eius? Sunt, consequatur veritatis doloribus odio labore eligendi
            totam, adipisci natus eius aspernatur perferendis sed temporibus.
          </p>
        </div>
      </article>
      <div>
        <p>2022</p>
      </div>
      <article>
        <h2>
          Blog: new article (Retrospec) <span> 01.11.2022 - 08:23</span>
        </h2>
        <div>
          <img src={retrospec} alt="retrospec" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error consectetur saepe
            quisquam quidem quas facere?
          </p>
        </div>
      </article>
      <article>
        <h2>
          Blog: new article (Fellow) <span> 15.07.2022 - 11:22</span>
        </h2>
        <div>
          <img src={fellow} alt="fellow" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem natus harum
            inventore animi saepe error nobis eveniet possimus ea.
          </p>
        </div>
      </article>
      <article>
        <h2>
          Blog: new article (Candylab Toys) <span> 01.02.2022 - 16:23</span>
        </h2>
        <div>
          <img src={candylabToys} alt="candylabToys" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum odio officiis ipsa
            cumque nobis voluptatum, veniam tempora natus minima. Maxime nisi dignissimos eligendi
            molestiae itaque repudiandae sapiente fugit vero minima inventore sit aliquam quisquam,
            incidunt, id, repellendus est ut assumenda!
          </p>
        </div>
      </article>
      <div>
        <p>2021</p>
      </div>
      <article>
        <h2>
          Blog: new article (Taschen) <span> 01.11.2021 - 12:00</span>
        </h2>
        <div>
          <img src={taschen} alt="taschen" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error consectetur saepe
            quisquam quidem quas facere?
          </p>
        </div>
      </article>
    </section>
  );
};

export default Blog;
