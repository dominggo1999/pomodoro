import React, { useState } from "react";
import Button from "./Button";
import { AiFillAndroid, AiFillHome, AiOutlinePlus } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "../Link";
import { delay } from "../../utils/delay";

export const Variants = () => {
  return (
    <>
      <div className="flex flex-wrap gap-x-4">
        <Button>Primary Button</Button>
        <Button variant="primary">Secondary Button</Button>
        <Button variant="secondary">Desctructive Button</Button>
        <Button variant="transparent">Transparent Button</Button>
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-x-2">
        <Button size="sm">Small</Button>
        <Button variant="primary">Medium</Button>
        <Button size="lg" variant="secondary">
          Large
        </Button>
        <Button size="xl">Extra Large</Button>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-2">
        <Button isLoading size="sm">
          Small
        </Button>
        <Button isLoading variant="primary">
          Medium
        </Button>
        <Button isLoading size="lg" variant="secondary">
          Large
        </Button>
        <Button isLoading size="xl">
          Extra Large
        </Button>
      </div>

      <div className="mt-10 flex flex-col flex-wrap gap-y-2">
        <div className="w-full">
          <Button fullWidth>Full Width</Button>
          <Button className="mt-3">Auto</Button>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap gap-x-4">
        <Button isDisabled>Primary Button</Button>
        <Button isDisabled variant="primary">
          Secondary Disabled
        </Button>
        <Button isDisabled variant="secondary">
          Desctructive Disabled
        </Button>
        <Button isDisabled variant="transparent">
          Transparent Disabled
        </Button>
      </div>

      <div className="mt-10 flex flex-wrap gap-x-4">
        <Button isLoading>Loading Left</Button>
        <Button loadingPosition="right" isLoading variant="primary">
          Loading Right
        </Button>
        <Button
          className="mt-5"
          loadingPosition="right"
          isLoading
          variant="secondary"
          fullWidth
        >
          Loading Right
        </Button>
        <Button
          className="mt-5"
          loadingPosition="right"
          isLoading
          variant="secondary"
          fullWidth
          isDisabled
        >
          Loading Right
        </Button>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-4">
        <Button size="sm" icon={BsFillPlayFill}>
          Primary Button
        </Button>
        <Button icon={AiOutlinePlus} variant="primary">
          Add New
        </Button>
        <Button size="lg" icon={AiFillHome} variant="secondary">
          Desctructive Button
        </Button>
        <Button size="xl" icon={AiFillAndroid} variant="transparent">
          Transparent Button
        </Button>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-4">
        <Button size="sm" icon={BsFillPlayFill} iconPosition="right">
          Primary Button
        </Button>
        <Button
          isDisabled
          isLoading
          size="sm"
          icon={BsFillPlayFill}
          iconPosition="right"
          loadingPosition="right"
        >
          Primary Button
        </Button>
        <Button icon={FiSettings} iconPosition="right" variant="primary">
          Secondary Button
        </Button>
        <Button
          size="lg"
          icon={AiFillHome}
          iconPosition="right"
          variant="secondary"
        >
          Desctructive Button
        </Button>
        <Button
          size="xl"
          icon={AiFillAndroid}
          iconPosition="right"
          variant="transparent"
        >
          Transparent Button
        </Button>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-4">
        <Button size="sm" icon={BsFillPlayFill} isAspectSquare />
        <Button
          variant="secondary"
          size="md"
          icon={FiSettings}
          isAspectSquare
        />
        <Button
          variant="primary"
          size="lg"
          icon={AiFillAndroid}
          isAspectSquare
        />
        <Button isAspectSquare size="xl" icon={AiFillHome} />
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-4">
        <Button size="sm" icon={BsFillPlayFill} isRounded />
        <Button variant="secondary" size="md" icon={FiSettings} isRounded />
        <Button variant="primary" size="lg" icon={AiFillAndroid} isRounded />
        <Button size="xl" icon={AiFillHome} isRounded />
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-4">
        <Button size="sm" icon={BsFillPlayFill} isDisabled />
        <Button variant="secondary" size="md" icon={FiSettings} isDisabled />
        <Button variant="primary" size="lg" icon={AiFillAndroid} isDisabled />
        <Button size="xl" icon={AiFillHome} isDisabled />
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-4">
        <Button size="sm" icon={BsFillPlayFill} isDisabled isRounded />
        <Button
          variant="secondary"
          size="md"
          icon={FiSettings}
          isDisabled
          isRounded
        />
        <Button
          variant="primary"
          size="lg"
          icon={AiFillAndroid}
          isDisabled
          isRounded
        />
        <Button size="xl" icon={AiOutlinePlus} isDisabled isRounded />
      </div>
    </>
  );
};

export const CustomRender = () => {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-x-4">
      <Button component={Link} href="https://www.google.com/" external>
        This is a link
      </Button>
      <Button variant="secondary" component="div">
        This is a div
      </Button>
      <Button variant="primary" component="span">
        This is a span
      </Button>
    </div>
  );
};

export const Controlled = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendMessage = async () => {
    setIsLoading(true);
    await delay(1000);
    setSent(true);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col">
      <p className="mb-3">{sent ? "Message sent" : "Send message ? "}</p>
      <div className="flex flex-col items-start gap-5">
        <Button isLoading={isLoading} onClick={sendMessage}>
          Send
        </Button>
        <Button
          icon={AiOutlinePlus}
          isLoading={isLoading}
          onClick={sendMessage}
        >
          {isLoading ? "Sending Message" : "Send"}
        </Button>
      </div>
    </div>
  );
};
