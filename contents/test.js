const contents = {
  pageTitle: "テストタイトル",
  introduction: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  Odit, nihil ipsa? Facilis rerum animi quia aliquid! Quas architecto dignissimos, iste porro, perspiciatis voluptatibus, quos harum exercitationem excepturi error vel aliquam.`,
  itemList: [
    {
      title: "アイテムリストのタイトル",
      items: [
        {
          title: "アイテム名",
          url: "hogehoge.jpeg",
          body: "アイテム詳細"
        },
        {
          title: "アイテム名",
          url: "hogehoge.jpeg",
          body: "アイテム詳細"
        }
      ],
      link: {
        title: "もっと見る",
        url: "リンク先のURL"
      }
    }
  ],
  advertising: {
    title: "広告タイトル",
    image: "hogehoge.jpeg",
    text: `広告のディスクリプション`,
    button: {
      title: "今すぐインストール",
      url: "open_app_store"
    }
  }
};

export default contents;
