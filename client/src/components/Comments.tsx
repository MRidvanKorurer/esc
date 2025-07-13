import React, { useMemo } from "react";
import { List, Card, Typography, Avatar } from "antd";
import { StarFilled, UserOutlined } from "@ant-design/icons";

const { Text, Title, Paragraph } = Typography;

interface CommentType {
  author: string;
  content: string;
  datetime: string;
  rating: number;
  avatar?: string;
}

const comments: CommentType[] = [
  {
    author: "Ayşe",
    content: "Gerçekten çok kaliteli ve profesyonel hizmet, teşekkürler!",
    datetime: "2025-07-11 14:35",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    author: "Mehmet",
    content: "İletişim çok kolaydı ve çok nazik birisiyle tanıştım.",
    datetime: "2025-07-10 09:20",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    author: "Fatma",
    content: "Genel olarak memnun kaldım, teşekkürler.",
    datetime: "2025-07-09 17:45",
    rating: 3,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const CommentsList: React.FC = () => {
  const sortedComments = useMemo(() => {
    return [...comments].sort((a, b) => b.rating - a.rating);
  }, []);

  const renderStars = (count: number) => {
    return (
      <div>
        {Array.from({ length: 5 }, (_, i) => (
          <StarFilled
            key={i}
            className={i < count ? "text-purple-600" : "text-gray-300"}
            style={{ fontSize: 16, marginRight: 2 }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto py-2 px-6 bg-white rounded-xl shadow">
      <Title level={3} className="text-center mb-6 text-purple-700">
       En İyi Yorum Alan Bayanlar
      </Title>

      <List
        itemLayout="horizontal"
        dataSource={sortedComments}
        renderItem={(comment) => (
          <List.Item>
            <Card
              hoverable
              className="w-full"
              bodyStyle={{ padding: "16px 20px" }}
              style={{
                borderColor: "#d6bcfa",
                boxShadow: "0 4px 10px rgba(159, 122, 234, 0.15)",
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {/* Sol: Avatar + Bilgiler */}
                <div className="flex items-center gap-4">
                  <Avatar
                    size={64}
                    src={comment.avatar}
                    icon={<UserOutlined />}
                  />
                  <div>
                    <Text strong className="text-purple-700">
                      {comment.author}
                    </Text>
                    <br />
                    <Text type="secondary" style={{ fontSize: 12 }}>
                      {comment.datetime}
                    </Text>
                  </div>
                </div>

                {/* Sağ: Puan */}
                <div className="text-right text-yellow-400">{renderStars(comment.rating)}</div>
              </div>

              {/* Yorum içeriği */}
              <Paragraph className="mt-4 text-gray-700" ellipsis={{ rows: 3 }}>
                {comment.content}
              </Paragraph>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CommentsList;
