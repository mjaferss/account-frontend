import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Container, Grid, Paper, Slide, Fade, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import './home-animations.css';
import TestimonialsAndStats from './TestimonialsAndStats';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ bgcolor: '#f4f6fa', minHeight: '100vh', fontFamily: 'Cairo, Arial, sans-serif' }}>
      {/* AppBar with Logo & Login */}
      <AppBar position="static" color="primary" elevation={3}>
        <Toolbar>
          {/* Logo Placeholder */}
          <Box sx={{ mr: 2 }}>
            <Avatar sx={{ bgcolor: '#fff', width: 56, height: 56 }} variant="rounded">
              {/* ضع شعارك هنا لاحقاً */}
              <Typography color="primary" fontWeight="bold">شعار</Typography>
            </Avatar>
          </Box>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: 1 }}>
            مؤسسة الفضيلي للتخليص الجمركي
          </Typography>
          <Button color="inherit" variant="outlined" onClick={() => navigate('/login')} sx={{ fontWeight: 'bold', bgcolor: '#fff', color: 'primary.main', borderRadius: 2, px: 3, boxShadow: 1 }}>
            تسجيل الدخول
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box className="hero-section" sx={{ py: 8, textAlign: 'center', position: 'relative', overflow: 'hidden', bgcolor: '#1976d2', color: '#fff' }}>
        <Fade in timeout={1000}>
          <Box>
            <Typography variant="h3" fontWeight="bold" mb={2}>
              خدمات تخليص جمركي متكاملة واحترافية
            </Typography>
            <Typography variant="h6" mb={4}>
              خبرة واسعة في إنهاء جميع إجراءات التخليص الجمركي والشحن البحري والبري والجوي بسرعة وكفاءة
            </Typography>
            <Button size="large" variant="contained" color="secondary" sx={{ fontWeight: 'bold', px: 6, py: 1.5, borderRadius: 3, fontSize: 20, boxShadow: 3, animation: 'bounceBtn 1.2s infinite alternate' }} onClick={() => navigate('/login')}>
              ابدأ الآن
            </Button>
          </Box>
        </Fade>
      </Box>

      {/* Sections */}
      <Container maxWidth="lg" sx={{ mt: 6, mb: 8 }}>
        <Grid container spacing={4}>
          {/* Section 1: خدماتنا */}
          <Grid item xs={12} md={6}>
            <Slide direction="right" in timeout={800}>
              <Paper elevation={4} sx={{ p: 4, borderRadius: 3, minHeight: 230, position: 'relative', overflow: 'hidden' }} className="section-animate">
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <LocalShippingIcon color="primary" sx={{ fontSize: 40 }} />
                  <Typography variant="h5" fontWeight="bold">خدمات الشحن والنقل</Typography>
                </Box>
                <Typography color="text.secondary">
                  شحن بري وبحري وجوي، تتبع الشحنات، خدمات نقل البضائع من الميناء إلى باب العميل.
                </Typography>
              </Paper>
            </Slide>
          </Grid>
          {/* Section 2: إنهاء الإجراءات */}
          <Grid item xs={12} md={6}>
            <Slide direction="left" in timeout={900}>
              <Paper elevation={4} sx={{ p: 4, borderRadius: 3, minHeight: 230 }} className="section-animate">
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <AssignmentTurnedInIcon color="success" sx={{ fontSize: 40 }} />
                  <Typography variant="h5" fontWeight="bold">إنهاء الإجراءات الجمركية</Typography>
                </Box>
                <Typography color="text.secondary">
                  تخليص كافة المعاملات الجمركية، استخراج التصاريح، دفع الرسوم، متابعة المعاملات إلكترونيًا.
                </Typography>
              </Paper>
            </Slide>
          </Grid>
          {/* Section 3: دعم العملاء */}
          <Grid item xs={12} md={6}>
            <Slide direction="right" in timeout={1000}>
              <Paper elevation={4} sx={{ p: 4, borderRadius: 3, minHeight: 230 }} className="section-animate">
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <SupportAgentIcon color="secondary" sx={{ fontSize: 40 }} />
                  <Typography variant="h5" fontWeight="bold">دعم العملاء 24/7</Typography>
                </Box>
                <Typography color="text.secondary">
                  فريق متخصص للرد على جميع استفساراتكم ومتابعة الشحنات لحظة بلحظة.
                </Typography>
              </Paper>
            </Slide>
          </Grid>
          {/* Section 4: خبرة واحترافية */}
          <Grid item xs={12} md={6}>
            <Slide direction="left" in timeout={1100}>
              <Paper elevation={4} sx={{ p: 4, borderRadius: 3, minHeight: 230 }} className="section-animate">
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <EmojiEventsIcon color="warning" sx={{ fontSize: 40 }} />
                  <Typography variant="h5" fontWeight="bold">سنوات من الخبرة</Typography>
                </Box>
                <Typography color="text.secondary">
                  فريق عمل ذو خبرة طويلة في مجال التخليص الجمركي والشحن الدولي والمحلي.
                </Typography>
              </Paper>
            </Slide>
          </Grid>
          {/* Section 5: خدمات التخزين */}
          <Grid item xs={12} md={6}>
            <Slide direction="right" in timeout={1200}>
              <Paper elevation={4} sx={{ p: 4, borderRadius: 3, minHeight: 230 }} className="section-animate">
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <WarehouseIcon color="info" sx={{ fontSize: 40 }} />
                  <Typography variant="h5" fontWeight="bold">خدمات التخزين</Typography>
                </Box>
                <Typography color="text.secondary">
                  حلول تخزين مرنة وآمنة للبضائع، مع مراقبة مستمرة وإمكانية تتبع المخزون.
                </Typography>
              </Paper>
            </Slide>
          </Grid>
          {/* Section 6: الشحن البحري */}
          <Grid item xs={12} md={6}>
            <Slide direction="left" in timeout={1300}>
              <Paper elevation={4} sx={{ p: 4, borderRadius: 3, minHeight: 230 }} className="section-animate">
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <DirectionsBoatIcon color="primary" sx={{ fontSize: 40 }} />
                  <Typography variant="h5" fontWeight="bold">الشحن البحري الدولي</Typography>
                </Box>
                <Typography color="text.secondary">
                  شحن حاويات وجزئيات، تخليص بحري، خدمات موانئ، تتبع الشحنات حول العالم.
                </Typography>
              </Paper>
            </Slide>
          </Grid>
        </Grid>
      </Container>
    </Box>
    {/* سكشن المراجعات والعملاء والأسعار والإحصائيات والفوتر */}
    <TestimonialsAndStats />
    </>
  );
}
