import type { Meta, StoryObj } from "@storybook/react";
import MyDefaultPage from "./MyDefaultPage";
import { getKcContextMock } from "./KcPageStory";
import type { KcContext } from "./KcContext";

const meta: Meta<typeof MyDefaultPage> = {
    title: "Login/MyDefaultPage",
    component: MyDefaultPage,
    parameters: {
        layout: "fullscreen"
    },
    tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        kcContext: getKcContextMock({
            pageId: "login.ftl",
            overrides: {
                social: {
                    providers: [
                        { loginUrl: "#", providerId: "google", displayName: "Google" },
                        { loginUrl: "#", providerId: "microsoft", displayName: "Microsoft" },
                        { loginUrl: "#", providerId: "apple", displayName: "Apple" },
                        { loginUrl: "#", providerId: "github", displayName: "GitHub" }
                    ]
                },
                realm: {
                    displayName: "Kubbeevault"
                }
            }
        }) as Extract<KcContext, { pageId: "login.ftl" }>
    }
};
