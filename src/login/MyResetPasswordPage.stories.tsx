import type { Meta, StoryObj } from "@storybook/react";
import MyResetPasswordPage from "./MyResetPasswordPage";
import { getKcContextMock } from "./KcPageStory";

const meta: Meta<typeof MyResetPasswordPage> = {
    title: "Login/MyResetPasswordPage",
    component: MyResetPasswordPage,
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
            pageId: "login-reset-password.ftl"
        })
    }
};
