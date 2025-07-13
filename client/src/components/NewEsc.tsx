import React from "react";
import { Timeline, Card, Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const escortsData = [
  {
    id: 1,
    name: "Elif",
    description: "İstanbul’da zarif ve özel bir deneyim sunar.",
    date: "2025-07-10",
    city: "Kadıköy",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Ayşe",
    description: "Gizlilik ve kalite garantili.",
    date: "2025-07-08",
    city: "Şişli",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 3,
    name: "Merve",
    description: "Sizi özel hissettirecek bir escort.",
    date: "2025-07-05",
    city: "Beşiktaş",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  
];
const NewEsc: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <Title level={3} className="text-center mb-6">
        Yeni Eskort Bayanlar
      </Title>

      <Timeline
        mode="left"
        items={escortsData.map((escort) => ({
          children: (
            <Card
              hoverable
              style={{ width: 400 }}
              bodyStyle={{ padding: "12px 16px" }}
            >
              <div className="flex gap-4 items-center">
                <Avatar size={64} src={escort.image} icon={<UserOutlined />} />
                <div>
                  <Title level={5} style={{ marginBottom: 4 }}>
                    {escort.name} <Text type="secondary">({escort.city})</Text>
                  </Title>
                  <Paragraph ellipsis={{ rows: 2 }}>
                    {escort.description}
                  </Paragraph>
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    {new Date(escort.date).toLocaleDateString()}
                  </Text>
                </div>
              </div>
            </Card>
          ),
          color: "purple",
          dot: <UserOutlined style={{ fontSize: "20px", color: "purple" }} />,
          key: escort.id,
        }))}
      />
    </div>
  );
};

export default NewEsc;
