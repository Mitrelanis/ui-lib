import Button from "./components/Button";
import Input from "./components/Input";
import Typography from "./components/Typography";
import Heading from "./components/Heading";
import Tooltip from "./components/Tooltip";
import Accordion from "./components/Accordion";
function App() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems:"center"}}>
      <div className="button-primary">
        <Button size="lg">lg, primary</Button>
        <Button size="md">md, primary</Button>
        <Button size="sm">sm, primary</Button>
      </div>

      <div className="button-bordered">
        <Button size="lg" variant="bordered">
          lg, bordered
        </Button>
        <Button size="md" variant="bordered">
          md, bordered
        </Button>
        <Button size="sm" variant="bordered">
          sm, bordered
        </Button>
      </div>

      <div className="input">
        <Input label="Name" type="text" value="Ivan Ivanov" disabled="True" />
        <Input label="Focus" type="text" placeholder="Focus" />
        <Input
          label="Name"
          type="text"
          placeholder=""
          value="Danger"
          danger="True"
        />
      </div>
      <div>
        <Typography size="sm">
          SM. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Typography size="md">
          MD. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Typography size="lg">
          LG. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </div>
      <div>
        <Heading level={1} className="custom-class">
          Heading 1
        </Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={4}>Heading 4</Heading>
        <Heading level={5}>Heading 5</Heading>
        <Heading level={6}>Heading 6</Heading>
      </div>
      <div style={{ display: "flex", flexDirection:"column", justifySelf:"center"}}>
        <Tooltip text="I am a tooltip" position="top">
          <span>Top Tooltip</span>
        </Tooltip>
        <Tooltip text="I am a tooltip" position="left">
          <span>Left Tooltip</span>
        </Tooltip>
        <Tooltip text="I am a tooltip" position="right">
          <span>Right Tooltip</span>
        </Tooltip>
        <Tooltip text="I am a tooltip" position="bottom">
          <span>Bottom Tooltip</span>
        </Tooltip>
      </div>
      <div>
      <Accordion title="Accordion 1">
        This is the content of Accordion 1.
      </Accordion>
      <Accordion title="Accordion 2" defaultOpen>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Accordion>
    </div>
    </div>
  );
}

export default App;
