// Type definitions for webextension-polyfill 0.9
// Project: https://github.com/mozilla/webextension-polyfill
// Definitions by: Santo Pfingsten <https://github.com/Lusito>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Generated using https://github.com/Lusito/webextension-polyfill-ts

// Generated from Mozilla sources. Do not manually edit!

import { ActivityLog as ImportedActivityLog } from "./namespaces/activityLog.d.ts";
import { Alarms as ImportedAlarms } from "./namespaces/alarms.d.ts";
import { Bookmarks as ImportedBookmarks } from "./namespaces/bookmarks.d.ts";
import { Action as ImportedAction } from "./namespaces/action.d.ts";
import { BrowserAction as ImportedBrowserAction } from "./namespaces/browserAction.d.ts";
import { BrowserSettings as ImportedBrowserSettings } from "./namespaces/browserSettings.d.ts";
import { BrowsingData as ImportedBrowsingData } from "./namespaces/browsingData.d.ts";
import { CaptivePortal as ImportedCaptivePortal } from "./namespaces/captivePortal.d.ts";
import { Clipboard as ImportedClipboard } from "./namespaces/clipboard.d.ts";
import { Commands as ImportedCommands } from "./namespaces/commands.d.ts";
import { ContentScripts as ImportedContentScripts } from "./namespaces/contentScripts.d.ts";
import { ContextualIdentities as ImportedContextualIdentities } from "./namespaces/contextualIdentities.d.ts";
import { Cookies as ImportedCookies } from "./namespaces/cookies.d.ts";
import { DeclarativeContent as ImportedDeclarativeContent } from "./namespaces/declarativeContent.d.ts";
import { Devtools as ImportedDevtools } from "./namespaces/devtools.d.ts";
import { Dns as ImportedDns } from "./namespaces/dns.d.ts";
import { Downloads as ImportedDownloads } from "./namespaces/downloads.d.ts";
import { Events as ImportedEvents } from "./namespaces/events.d.ts";
import { Experiments as ImportedExperiments } from "./namespaces/experiments.d.ts";
import { Extension as ImportedExtension } from "./namespaces/extension.d.ts";
import { ExtensionTypes as ImportedExtensionTypes } from "./namespaces/extensionTypes.d.ts";
import { Find as ImportedFind } from "./namespaces/find.d.ts";
import { GeckoProfiler as ImportedGeckoProfiler } from "./namespaces/geckoProfiler.d.ts";
import { History as ImportedHistory } from "./namespaces/history.d.ts";
import { I18n as ImportedI18n } from "./namespaces/i18n.d.ts";
import { Identity as ImportedIdentity } from "./namespaces/identity.d.ts";
import { Idle as ImportedIdle } from "./namespaces/idle.d.ts";
import { Management as ImportedManagement } from "./namespaces/management.d.ts";
import { Manifest as ImportedManifest } from "./namespaces/manifest.d.ts";
import { ContextMenus as ImportedContextMenus } from "./namespaces/contextMenus.d.ts";
import { Menus as ImportedMenus } from "./namespaces/menus.d.ts";
import { NetworkStatus as ImportedNetworkStatus } from "./namespaces/networkStatus.d.ts";
import { NormandyAddonStudy as ImportedNormandyAddonStudy } from "./namespaces/normandyAddonStudy.d.ts";
import { Notifications as ImportedNotifications } from "./namespaces/notifications.d.ts";
import { Omnibox as ImportedOmnibox } from "./namespaces/omnibox.d.ts";
import { PageAction as ImportedPageAction } from "./namespaces/pageAction.d.ts";
import { Permissions as ImportedPermissions } from "./namespaces/permissions.d.ts";
import { Pkcs11 as ImportedPkcs11 } from "./namespaces/pkcs11.d.ts";
import { Privacy as ImportedPrivacy } from "./namespaces/privacy.d.ts";
import { Proxy as ImportedProxy } from "./namespaces/proxy.d.ts";
import { Runtime as ImportedRuntime } from "./namespaces/runtime.d.ts";
import { Scripting as ImportedScripting } from "./namespaces/scripting.d.ts";
import { Search as ImportedSearch } from "./namespaces/search.d.ts";
import { Sessions as ImportedSessions } from "./namespaces/sessions.d.ts";
import { SidebarAction as ImportedSidebarAction } from "./namespaces/sidebarAction.d.ts";
import { Storage as ImportedStorage } from "./namespaces/storage.d.ts";
import { Tabs as ImportedTabs } from "./namespaces/tabs.d.ts";
import { Theme as ImportedTheme } from "./namespaces/theme.d.ts";
import { TopSites as ImportedTopSites } from "./namespaces/topSites.d.ts";
import { Types as ImportedTypes } from "./namespaces/types.d.ts";
import { Urlbar as ImportedUrlbar } from "./namespaces/urlbar.d.ts";
import { UserScripts as ImportedUserScripts } from "./namespaces/userScripts.d.ts";
import { WebNavigation as ImportedWebNavigation } from "./namespaces/webNavigation.d.ts";
import { WebRequest as ImportedWebRequest } from "./namespaces/webRequest.d.ts";
import { Windows as ImportedWindows } from "./namespaces/windows.d.ts";

declare namespace Browser {
  const activityLog: ActivityLog.Static;
  const alarms: Alarms.Static;
  const bookmarks: Bookmarks.Static;
  const action: Action.Static;
  const browserAction: BrowserAction.Static;
  const browserSettings: BrowserSettings.Static;
  const browsingData: BrowsingData.Static;
  const captivePortal: CaptivePortal.Static;
  const clipboard: Clipboard.Static;
  const commands: Commands.Static;
  const contentScripts: ContentScripts.Static;
  const contextualIdentities: ContextualIdentities.Static;
  const cookies: Cookies.Static;
  const declarativeContent: DeclarativeContent.Static;
  const devtools: Devtools.Static;
  const dns: Dns.Static;
  const downloads: Downloads.Static;
  const events: Events.Static;
  const experiments: Experiments.Static;
  const extension: Extension.Static;
  const extensionTypes: ExtensionTypes.Static;
  const find: Find.Static;
  const geckoProfiler: GeckoProfiler.Static;
  const history: History.Static;
  const i18n: I18n.Static;
  const identity: Identity.Static;
  const idle: Idle.Static;
  const management: Management.Static;
  const manifest: Manifest.Static;
  const contextMenus: ContextMenus.Static;
  const menus: Menus.Static;
  const networkStatus: NetworkStatus.Static;
  const normandyAddonStudy: NormandyAddonStudy.Static;
  const notifications: Notifications.Static;
  const omnibox: Omnibox.Static;
  const pageAction: PageAction.Static;
  const permissions: Permissions.Static;
  const pkcs11: Pkcs11.Static;
  const privacy: Privacy.Static;
  const proxy: Proxy.Static;
  const runtime: Runtime.Static;
  const scripting: Scripting.Static;
  const search: Search.Static;
  const sessions: Sessions.Static;
  const sidebarAction: SidebarAction.Static;
  const storage: Storage.Static;
  const tabs: Tabs.Static;
  const theme: Theme.Static;
  const topSites: TopSites.Static;
  const types: Types.Static;
  const urlbar: Urlbar.Static;
  const userScripts: UserScripts.Static;
  const webNavigation: WebNavigation.Static;
  const webRequest: WebRequest.Static;
  const windows: Windows.Static;

  interface Browser {
    activityLog: ActivityLog.Static;
    alarms: Alarms.Static;
    bookmarks: Bookmarks.Static;
    action: Action.Static;
    browserAction: BrowserAction.Static;
    browserSettings: BrowserSettings.Static;
    browsingData: BrowsingData.Static;
    captivePortal: CaptivePortal.Static;
    clipboard: Clipboard.Static;
    commands: Commands.Static;
    contentScripts: ContentScripts.Static;
    contextualIdentities: ContextualIdentities.Static;
    cookies: Cookies.Static;
    declarativeContent: DeclarativeContent.Static;
    devtools: Devtools.Static;
    dns: Dns.Static;
    downloads: Downloads.Static;
    events: Events.Static;
    experiments: Experiments.Static;
    extension: Extension.Static;
    extensionTypes: ExtensionTypes.Static;
    find: Find.Static;
    geckoProfiler: GeckoProfiler.Static;
    history: History.Static;
    i18n: I18n.Static;
    identity: Identity.Static;
    idle: Idle.Static;
    management: Management.Static;
    manifest: Manifest.Static;
    contextMenus: ContextMenus.Static;
    menus: Menus.Static;
    networkStatus: NetworkStatus.Static;
    normandyAddonStudy: NormandyAddonStudy.Static;
    notifications: Notifications.Static;
    omnibox: Omnibox.Static;
    pageAction: PageAction.Static;
    permissions: Permissions.Static;
    pkcs11: Pkcs11.Static;
    privacy: Privacy.Static;
    proxy: Proxy.Static;
    runtime: Runtime.Static;
    scripting: Scripting.Static;
    search: Search.Static;
    sessions: Sessions.Static;
    sidebarAction: SidebarAction.Static;
    storage: Storage.Static;
    tabs: Tabs.Static;
    theme: Theme.Static;
    topSites: TopSites.Static;
    types: Types.Static;
    urlbar: Urlbar.Static;
    userScripts: UserScripts.Static;
    webNavigation: WebNavigation.Static;
    webRequest: WebRequest.Static;
    windows: Windows.Static;
  }

  /* tslint:disable:strict-export-declare-modifiers */
  export import ActivityLog = ImportedActivityLog;
  export import Alarms = ImportedAlarms;
  export import Bookmarks = ImportedBookmarks;
  export import Action = ImportedAction;
  export import BrowserAction = ImportedBrowserAction;
  export import BrowserSettings = ImportedBrowserSettings;
  export import BrowsingData = ImportedBrowsingData;
  export import CaptivePortal = ImportedCaptivePortal;
  export import Clipboard = ImportedClipboard;
  export import Commands = ImportedCommands;
  export import ContentScripts = ImportedContentScripts;
  export import ContextualIdentities = ImportedContextualIdentities;
  export import Cookies = ImportedCookies;
  export import DeclarativeContent = ImportedDeclarativeContent;
  export import Devtools = ImportedDevtools;
  export import Dns = ImportedDns;
  export import Downloads = ImportedDownloads;
  export import Events = ImportedEvents;
  export import Experiments = ImportedExperiments;
  export import Extension = ImportedExtension;
  export import ExtensionTypes = ImportedExtensionTypes;
  export import Find = ImportedFind;
  export import GeckoProfiler = ImportedGeckoProfiler;
  export import History = ImportedHistory;
  export import I18n = ImportedI18n;
  export import Identity = ImportedIdentity;
  export import Idle = ImportedIdle;
  export import Management = ImportedManagement;
  export import Manifest = ImportedManifest;
  export import ContextMenus = ImportedContextMenus;
  export import Menus = ImportedMenus;
  export import NetworkStatus = ImportedNetworkStatus;
  export import NormandyAddonStudy = ImportedNormandyAddonStudy;
  export import Notifications = ImportedNotifications;
  export import Omnibox = ImportedOmnibox;
  export import PageAction = ImportedPageAction;
  export import Permissions = ImportedPermissions;
  export import Pkcs11 = ImportedPkcs11;
  export import Privacy = ImportedPrivacy;
  export import Proxy = ImportedProxy;
  export import Runtime = ImportedRuntime;
  export import Scripting = ImportedScripting;
  export import Search = ImportedSearch;
  export import Sessions = ImportedSessions;
  export import SidebarAction = ImportedSidebarAction;
  export import Storage = ImportedStorage;
  export import Tabs = ImportedTabs;
  export import Theme = ImportedTheme;
  export import TopSites = ImportedTopSites;
  export import Types = ImportedTypes;
  export import Urlbar = ImportedUrlbar;
  export import UserScripts = ImportedUserScripts;
  export import WebNavigation = ImportedWebNavigation;
  export import WebRequest = ImportedWebRequest;
  export import Windows = ImportedWindows;
  /* tslint:enable:strict-export-declare-modifiers */
}

declare global {
  const browser: Browser;
  interface Window {
    // deno-lint-ignore no-explicit-any
    ytInitialData: any;
    wrappedJSObject: Window;
  }
}

// tslint:disable-next-line:export-just-namespace
export = Browser;
