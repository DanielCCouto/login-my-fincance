import type { Meta, StoryObj } from "@storybook/react";
import MyRegisterPage from "./MyRegisterPage";
import { getKcContextMock } from "./KcPageStory";

const meta: Meta<typeof MyRegisterPage> = {
    title: "login/MyRegisterPage",
    component: MyRegisterPage
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        kcContext: getKcContextMock({
            pageId: "register.ftl",
            overrides: {
                social: {
                    providers: [
                        { loginUrl: "#", displayName: "Google", providerId: "google" },
                        {
                            loginUrl: "#",
                            displayName: "Microsoft",
                            providerId: "microsoft"
                        },
                        { loginUrl: "#", displayName: "Apple", providerId: "apple" },
                        { loginUrl: "#", displayName: "GitHub", providerId: "github" }
                    ]
                }
            }
        })
    }
};
