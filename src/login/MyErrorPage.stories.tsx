import type { Meta, StoryObj } from "@storybook/react";
import MyErrorPage from "./MyErrorPage";
import { getKcContextMock } from "./KcPageStory";

const meta: Meta<typeof MyErrorPage> = {
    title: "Login/MyErrorPage",
    component: MyErrorPage,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        kcContext: getKcContextMock({
            pageId: "error.ftl",
            overrides: {
                message: {
                    type: "error",
                    summary: "The link you used has expired. Please try again."
                }
            }
        })
    }
};
