import type { Meta, StoryObj } from "@storybook/react";
import MyOtpPage from "./MyOtpPage";
import { getKcContextMock } from "./KcPageStory";

const meta: Meta<typeof MyOtpPage> = {
    title: "Login/MyOtpPage",
    component: MyOtpPage,
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
            pageId: "login-otp.ftl"
        })
    }
};
