export declare type ID = string;

export declare type Code =
  | 'abap'
  | 'arduino'
  | 'bash'
  | 'basic'
  | 'c'
  | 'clojure'
  | 'coffeescript'
  | 'c++'
  | 'c#'
  | 'css'
  | 'dart'
  | 'diff'
  | 'docker'
  | 'elixir'
  | 'elm'
  | 'erlang'
  | 'flow'
  | 'fortran'
  | 'f#'
  | 'gherkin'
  | 'glsl'
  | 'go'
  | 'graphql'
  | 'groovy'
  | 'haskell'
  | 'html'
  | 'java'
  | 'javascript'
  | 'json'
  | 'julia'
  | 'kotlin'
  | 'latex'
  | 'less'
  | 'lisp'
  | 'livescript'
  | 'lua'
  | 'makefile'
  | 'markdown'
  | 'markup'
  | 'matlab'
  | 'mermaid'
  | 'nix'
  | 'objective-c'
  | 'ocaml'
  | 'pascal'
  | 'perl'
  | 'php'
  | 'plain text'
  | 'powershell'
  | 'prolog'
  | 'protobuf'
  | 'python'
  | 'r'
  | 'reason'
  | 'ruby'
  | 'rust'
  | 'sass'
  | 'scala'
  | 'scheme'
  | 'scss'
  | 'shell'
  | 'sql'
  | 'swift'
  | 'typescript'
  | 'vb.net'
  | 'verilog'
  | 'vhdl'
  | 'visual basic'
  | 'webassembly'
  | 'xml'
  | 'yaml'
  | 'java/c/c++/c#';
export declare type Color =
  | 'default'
  | 'gray'
  | 'brown'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red'
  | 'gray_background'
  | 'brown_background'
  | 'orange_background'
  | 'yellow_background'
  | 'green_background'
  | 'blue_background'
  | 'purple_background'
  | 'pink_background'
  | 'red_background';
export declare type PropertyType =
  | 'title'
  | 'text'
  | 'number'
  | 'select'
  | 'multi_select'
  | 'date'
  | 'person'
  | 'file'
  | 'checkbox'
  | 'url'
  | 'email'
  | 'phone_number'
  | 'formula'
  | 'relation'
  | 'created_time'
  | 'created_by'
  | 'last_edited_time'
  | 'last_edited_by';
export declare type NumberFormat =
  | 'number_with_commas'
  | 'percent'
  | 'dollar'
  | 'euro'
  | 'pound'
  | 'yen'
  | 'rupee'
  | 'won'
  | 'yuan';
export declare type Role = 'editor' | 'reader' | 'none' | 'read_and_write';
export declare type NotionUser = {
  object: string;
  id: ID;
  type?: 'person' | 'bot';
  name?: string | null;
  avatar_url?: string | null;
};

export declare type BlockType =
  | 'paragraph'
  | 'heading_1'
  | 'heading_2'
  | 'heading_3'
  | 'bulleted_list_item'
  | 'numbered_list_item'
  | 'to_do'
  | 'toggle'
  | 'child_page'
  | 'child_database'
  | 'code'
  | 'embed'
  | 'image'
  | 'video'
  | 'file'
  | 'pdf'
  | 'bookmark'
  | 'callout'
  | 'quote'
  | 'equation'
  | 'divider'
  | 'table_of_contents'
  | 'column'
  | 'column_list'
  | 'link_preview'
  | 'synced_block'
  | 'template'
  | 'link_to_page'
  | 'table'
  | 'table_row'
  | 'unsupported';

export declare type RichTextType = 'text' | 'mention' | 'equation';

export declare type RichTextAnnotation = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: Color;
};

export declare type RichTextObject = {
  rich_text: Array<RichText>;
  color: Color;
};

export declare type RichTextTitle = {
  title: string;
};

export declare type RichText = {
  plain_text: string;
  href?: string | null;
  text: {
    content: string;
    link: string | null;
  };
  annotations: RichTextAnnotation;
  type: RichTextType;
};
export declare type MentionObject = {
  type: 'user' | 'page' | 'database' | 'date' | 'link_preview';
};

interface ImageObject {
  type: 'external' | 'file';
  external?: {
    url: string;
  };
  file?: {
    url: string;
    expiry_time: string;
  };
}

interface CaptionObject {
  caption: Array<RichText>;
}

interface BookmarkObject {
  caption: RichTextObject[];
  url: 'https://developer.mozilla.org/ko/docs/Web/CSS/-webkit-line-clamp';
}

export interface NotionBlockItem
  extends Record<BlockType, RichTextObject | RichTextTitle | ImageObject | BookmarkObject> {
  paragraph: RichTextObject;
  heading_1: RichTextObject;
  heading_2: RichTextObject;
  heading_3: RichTextObject;
  bulleted_list_item: RichTextObject;
  numbered_list_item: RichTextObject;
  to_do: RichTextObject;
  toggle: RichTextObject;
  child_page: RichTextObject;
  child_database: RichTextTitle;
  code: RichTextObject & CaptionObject & { language: Code };
  embed: RichTextObject;
  image: ImageObject & CaptionObject;
  video: RichTextObject;
  file: RichTextObject;
  pdf: RichTextObject;
  bookmark: BookmarkObject;
  callout: RichTextObject & { icon: IconObject };
  quote: RichTextObject;
  equation: RichTextObject;
  divider: RichTextObject;
  table_of_contents: RichTextObject;
  column: RichTextObject;
  column_list: RichTextObject;
  link_preview: RichTextObject;
  synced_block: RichTextObject;
  template: RichTextObject;
  link_to_page: RichTextObject;
  table: RichTextObject;
  table_row: RichTextObject;
  unsupported: RichTextObject;
}

export interface NotionBlock extends NotionBlockItem {
  object: string;
  id: ID;
  created_time: string;
  last_edited_time: string;
  created_by: NotionUser;
  last_edited_by: NotionUser;
  has_children: boolean;
  archived: boolean;
  type: BlockType;
}

export declare type NotionBlockTypes =
  | 'block'
  | 'page'
  | 'user'
  | 'database'
  | 'property_item'
  | 'page_or_database';

export interface IGetNotion {
  blocks: NotionBlocksChildrenList;
  databaseBlocks: Record<string, NotionDatabasesQuery>;
  childrenBlocks: Record<string, NotionBlocksChildrenList>;
}

export interface NotionBlocksChildrenList {
  object: 'list'; // Always "list".
  results: Array<NotionBlock>;
  next_cursor?: string | null; // Only available when "has_more" is true.
  has_more: boolean;
  type: NotionBlockTypes;
  block: {};
}

export interface TimeObject {
  object: string;
  id: string;
}

export interface Properties extends Partial<Record<PropertyType | string, any>> {
  id: string;
  type: string;
}

export interface NotionDatabase {
  object: string; // Always "database"
  id: string; // uuid
  created_time: string;
  created_by: TimeObject;
  last_edited_time: string;
  last_edited_by: TimeObject;
  // title?: RichText;
  // description?: RichText;
  icon?: ImageObject | null;
  cover?: ImageObject | null;
  properties: Record<
    string,
    Properties & {
      id: PropertyType;
      type: PropertyType;
      title?: Array<RichText>;
    }
  >;
  parent?: {
    type: 'database_id' | string;
    database_id: string;
  };
  url?: string | null;
  archived?: boolean | null;
  is_inline?: boolean | null;
}
export interface NotionDatabasesQuery {
  object: 'list'; // Always "list".
  results: Array<NotionDatabase>;
  next_cursor?: string | null; // Only available when "has_more" is true.
  has_more: boolean;
  type: NotionBlockTypes;
  page: {};
}
export interface NotionDatabasesQuery {
  object: 'list'; // Always "list".
  results: Array<NotionDatabase>;
  next_cursor?: string | null; // Only available when "has_more" is true.
  has_more: boolean;
  type: NotionBlockTypes;
  page: {};
}
export interface EmojiObject {
  type: 'emoji';
  emoji: string;
}

export interface ParentObject {
  type: 'workspace' | 'database_id' | 'page_id' | 'block_id';
  workspace?: boolean; // workspace??? ?????? Always true.
  database_id?: string;
  page_id?: string;
}

export interface IconObject {
  type: 'emoji' | 'file';
  file?: ImageObject['file'];
  emoji?: EmojiObject['emoji'];
}

export interface NotionPagesRetrieve {
  object: 'page'; // Always "page"
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: TimeObject;
  last_edited_by: TimeObject;
  cover: ImageObject;
  icon: IconObject;
  parent: ParentObject;
  archived: false;
  properties: Properties & {
    title: {
      id: 'title';
      type: 'title';
      title: Array<RichText>;
    };
  };
  url: string;
}
