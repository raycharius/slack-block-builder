/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */

import { Builder } from '../lib';
import {
  Prop,
  ButtonStyle,
  ResponseType,
  DispatchOnType,
} from '../constants';

export abstract class AsUser extends Builder {
  /**
   * @description Sets the message to be sent as either the user whose auth token is being used or as the bot user associated with your app.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public asUser(boolean = true): this {
    return this.set(boolean, Prop.AsUser);
  }
}

export abstract class ClearOnClose extends Builder {
  /**
   * @description Instructs the Slack API to close all open views in the view stack when this particular view is closed.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public clearOnClose(boolean = true): this {
    return this.set(boolean, Prop.ClearOnClose);
  }
}

export abstract class Danger extends Builder {
  /**
   * @description For a button element, this changes the color to red. For confirmation dialogs, this sets the main button in the bottom right corner to red, indicating that an action is potentially destructive.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public danger(boolean = true): this {
    return boolean ? this.set(ButtonStyle.Danger, Prop.Style) : this;
  }
}

export abstract class DefaultToCurrentConversation extends Builder {
  /**
   * @description Pre-populates the select menu with the conversation that the user was viewing when they opened the modal, if available.
   *
   * **Slack Validation Rules and Tips:**
   *    * If initial conversations are provided, this option is ignored.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public defaultToCurrentConversation(boolean = true): this {
    return this.set(boolean, Prop.DefaultToCurrentConversation);
  }
}

export abstract class DeleteOriginal extends Builder {
  /**
   * @description Instructs the Slack API to delete the message from which the interaction originated when sending the current message.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public deleteOriginal(boolean = true): this {
    return this.set(boolean, Prop.DeleteOriginal);
  }
}

export abstract class DispatchAction extends Builder {
  /**
   * @description Instructs the Slack API to send an interaction event to your app when the element in the input block has been interacted with.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public dispatchAction(boolean = true): this {
    return this.set(boolean, Prop.DispatchAction);
  }
}

export abstract class DispatchActionOnCharacterEntered extends Builder {
  /**
   * @description Instructs the Slack API to dispatch an interaction payload to your app when the user enters or deletes a character in the input.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public dispatchActionOnCharacterEntered(boolean = true): this {
    return boolean ? this.set(DispatchOnType.OnCharacterEntered, Prop.OnCharacterEntered) : this;
  }
}

export abstract class DispatchActionOnEnterPressed extends Builder {
  /**
   * @description Instructs the Slack API to dispatch an interaction payload to your app when the user presses the enter key while the input is in focus.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public dispatchActionOnEnterPressed(boolean = true): this {
    return boolean ? this.set(DispatchOnType.OnEnterPressed, Prop.OnEnterPressed) : this;
  }
}

export abstract class Ephemeral extends Builder {
  /**
   * @description Instructs the Slack API to display the message only to the user who invoked the interaction payload or slash command.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public ephemeral(boolean = true): this {
    return boolean ? this.set(ResponseType.Ephemeral, Prop.ResponseType) : this;
  }
}

export abstract class ExcludeExternalSharedChannels extends Builder {
  /**
   * @description Excludes conversations shared with external organizations from the menu's options.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public excludeExternalSharedChannels(boolean = true): this {
    return this.set(boolean, Prop.ExcludeExternalSharedChannels);
  }
}

export abstract class ExcludeBotUsers extends Builder {
  /**
   * @description Excludes conversations with bot users from the menu's options.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public excludeBotUsers(boolean = true): this {
    return this.set(boolean, Prop.ExcludeBotUsers);
  }
}

export abstract class FocusOnLoad extends Builder {
  /**
   * @description Sets an element to have auto focus on opening the view
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public focusOnLoad(boolean = true): this {
    return this.set(boolean, Prop.FocusOnLoad);
  }
}

export abstract class IgnoreMarkdown extends Builder {
  /**
   * @description Instructs the Slack API to ignore any markdown in the text property of the message.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public ignoreMarkdown(boolean = false): this {
    return this.set(boolean, Prop.Mrkdwn);
  }
}

export abstract class InChannel extends Builder {
  /**
   * @description Instructs the Slack API to make the message visible to everyone in the channel from which the interaction payload or slash command originated.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public inChannel(boolean = true): this {
    return boolean ? this.set(ResponseType.InChannel, Prop.ResponseType) : this;
  }
}

export abstract class Multiline extends Builder {
  /**
   * @description Sets the text input to be a larger, multi-line input for larger portions of text.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public multiline(boolean = true): this {
    return this.set(boolean, Prop.Multiline);
  }
}

export abstract class NotifyOnClose extends Builder {
  /**
   * @description Instructs the Slack API to send an interaction payload to your app when the view is closed.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public notifyOnClose(boolean = true): this {
    return this.set(boolean, Prop.NotifyOnClose);
  }
}

export abstract class Optional extends Builder {
  /**
   * @description Lets the Slack API know that inputting data in the the input is not required for the view to be successfully submitted.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public optional(boolean = true): this {
    return this.set(boolean, Prop.Optional);
  }
}

export abstract class Primary extends Builder {
  /**
   * @description For a button element, this changes the color to green. For confirmation dialogs, this sets the main button in the bottom right corner to green, which is meant to confirm the action.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public primary(boolean = true): this {
    return boolean ? this.set(ButtonStyle.Primary, Prop.Style) : this;
  }
}

export abstract class ReplaceOriginal extends Builder {
  /**
   * @description Instructs the Slack API to replace the original message, from which the interaction payload originated, with the current message.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public replaceOriginal(boolean = true): this {
    return this.set(boolean, Prop.ReplaceOriginal);
  }
}

export abstract class ResponseUrlEnabled extends Builder {
  /**
   * @description Instructs the Slack API to provide a response URL at view submission.
   *
   * **Slack Validation Rules and Tips:**
   *    * Only available in views with input blocks.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public responseUrlEnabled(boolean = true): this {
    return this.set(boolean, Prop.ResponseUrlEnabled);
  }
}

export abstract class SubmitDisabled extends Builder {
  /**
   * @description Configures the workflow step to have a disabled submit button until the user has input data into one or more inputs.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public submitDisabled(boolean = true): this {
    return this.set(boolean, Prop.SubmitDisabled);
  }
}
