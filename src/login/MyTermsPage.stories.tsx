import type { Meta, StoryObj } from "@storybook/react";
import MyTermsPage from "./MyTermsPage";
import { getKcContextMock } from "./KcPageStory";

const meta: Meta<typeof MyTermsPage> = {
    title: "Login/MyTermsPage",
    component: MyTermsPage,
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
            pageId: "terms.ftl",
            overrides: {
                user: {
                    email: "usuario@exemplo.com"
                },
                termsAndConditions: "<p>Test terms and conditions</p>"
            }
        })
    }
};
