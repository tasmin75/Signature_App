import React, { useState } from "react";
import Title from "./components/Title";

const App = () => {
  const [name, setName] = useState("Tasmin");
  const [date, setDate] = useState("DOB");

  return (
    <div className="container-fluid">
      <h1 className="text-center">Signature App</h1>
      <Title text={date} />
      <Title text={name} />
     
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, illum
        consequatur, tempora reprehenderit magni perferendis accusamus eveniet
        ullam totam placeat blanditiis rem consectetur voluptas. Recusandae
        consequuntur dolorem, reprehenderit dignissimos laboriosam vero hic odio
        asperiores magni minima quisquam quod rem exercitationem quibusdam enim
        ratione assumenda ex dicta sequi aliquam mollitia aut dolores officiis?
        Ipsum maxime veritatis animi labore quo! Facere ipsa tenetur perferendis
        accusamus dolores, perspiciatis quasi explicabo autem suscipit unde
        consequuntur esse laborum! Eum inventore quasi facilis fugit sapiente
        harum, a, magni labore beatae reiciendis minus nemo ab, illo corporis.
        Suscipit quibusdam possimus dolores nisi voluptatem repudiandae fuga eum
        rem!
      </p>
      <div className="d-flex">
        <input
          type="date"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
    </div>
  );
};

export default App;
