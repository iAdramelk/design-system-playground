import Button from "../components/Button";
import Input from "../components/Input";

export default function RootPage() {
  return (
    <div>
      <Button>Hello world!</Button>&nbsp;
      <Button color="green" size="sm">Hello world!</Button>&nbsp;
      <Button color="blue" size="lg">Hello world!</Button>&nbsp;
      <Input size="md" placeholder="Write text here" />
    </div>
  );
}