import type { Meta, StoryObj } from "@storybook/react";
import MyInfoPage from "./MyInfoPage";
import { getKcContextMock } from "./KcPageStory";

const meta: Meta<typeof MyInfoPage> = {
    title: "Login/MyInfoPage",
    component: MyInfoPage,
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
            pageId: "info.ftl",
            overrides: {
                message: {
                    type: "info",
                    summary: "You will receive an email with further instructions soon."
                }
            }
        })
    }
};
