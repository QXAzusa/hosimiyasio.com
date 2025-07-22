import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './tachie-styles.css'
const PhotoAlbum = () => {
    const photos = [
        {
          year: 2024,
          images: [
            { src: '/img/tachie_202402.jpg', description: '' }
          ]
        },
        {
            year: 2022,
            images: [
              { src: '/img/tachie_202207.jpg', description: '' }
            ]
        },
        {
            year: 2021,
            images: [
              { src: '/img/tachie_202112.jpg', description: '' }
            ]
        },
        {
          year: 2020,
          images: [
            { src: '/img/tachie_2020.jpg', description: '' }
          ]
        },
      ];

  return (
    <Layout title="立绘" description="">
      <div style={{ padding: '2rem' }}>
        <h1>立绘</h1>
        <VerticalTimeline>
          {photos.map((photo, index) => (
            <VerticalTimelineElement
            key={index}
            date={photo.year.toString()}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', transform: 'scale(0.6)' }} // 缩小节点大小
            contentStyle={{ textAlign: 'left' }} // 左对齐内容
            icon={<div className="custom-icon"></div>} // 使用自定义图标
          >
              {photo.images.map((image, idx) => (
                <div key={idx} style={{ marginBottom: '10px' }}>
                  <img class='tachie_img' src={image.src} alt={`图片${idx + 1}`} style={{ width: '70%' }} />
                  <p>{image.description}</p>
                </div>
              ))}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </Layout>
  );
};

export default PhotoAlbum;
