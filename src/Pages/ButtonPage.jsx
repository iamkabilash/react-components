import Button from "../Components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  return (
    <div className="w-screen items-center justify-center flex flex-col gap-[20px] mt-[30px]">
      <div>
        <Button success onClick={() => console.log("Button clicked")}>
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button
          success
          outline
          onMouseEnter={() => console.log("Mouse entered")}
        >
          Click me
        </Button>
      </div>
      <div>
        <Button
          warning
          rounded
          className="py-4"
          onClick={() => console.log("Button clicked")}
        >
          <GoCloudDownload />
          Buy now
        </Button>
      </div>
      <div>
        <Button primary>
          <GoDatabase />
          Subscribe
        </Button>
      </div>
      <div>
        <Button danger>Delete</Button>
      </div>
      <div>
        <Button secondary>Add to cart</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
